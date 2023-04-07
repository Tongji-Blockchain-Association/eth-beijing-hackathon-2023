// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./FDToken.sol";

contract Vote {

    struct Validator{
        int creditScore;//信用分
        mapping(string => int) domianScore;//领域熟悉度
        string locate;//地址
        string picture;//头像
    }
    
    struct News{
        int rightNumber;
        int wrongNumber;
        address[] rightVoters;
        address[] wrongVoters;
        int state;
        string publisher;
        mapping(address => bool) isVoted;
        string locate;//事件发生地址
    }

    struct Publisher{
        string name;
        int rank;
        int authorScore;
    }

    string[] topic;

    mapping(address => Validator) public validators;
    mapping(string => News) public URLtoNews;
    mapping(string => string[]) public newsDomain;
    mapping(string => Publisher) public newsPublisher;
    string[] public allPublishers;
    FDToken token;

    //初始化审核者身份信息
    function initValidators(string memory locate, string memory _picture) public {
        validators[msg.sender].locate = locate;
        validators[msg.sender].picture = _picture;
    }

    //爬取新闻信息
    function initNews(string memory newsUrl, string[] memory domain, string memory publisherName, string memory locate) public {
        createNewsDomain(newsUrl, domain);
        URLtoNews[newsUrl].publisher = publisherName;
        URLtoNews[newsUrl].locate = locate;
    }

    //导入发布者信息
    function initPublishers(string[] memory _allPublishers)public {
        for(uint i = 0; i < _allPublishers.length; i++) {
            Publisher memory pub;
            pub.name = _allPublishers[i];
            pub.rank = 0;
            pub.authorScore = 0;
            newsPublisher[_allPublishers[i]] = pub;
            allPublishers.push(_allPublishers[i]);
        }
    }

    constructor() {
        token = FDToken(0xB57ee0797C3fc0205714a577c02F7205bB89dF30);
    }

    //计算审核者在某一新闻上的权重
    function calculateWeight(string memory newsUrl) public view returns (int weight){
        weight = 0;
        //信用加权
        weight += validators[msg.sender].creditScore/20 + 1;
        //领域加权
        for(uint i=0; i < newsDomain[newsUrl].length; i++) {
        weight += validators[msg.sender].domianScore[newsDomain[newsUrl][i]];
        }
        //地址加权
        if(sha256(bytes(URLtoNews[newsUrl].locate)) == sha256(bytes(validators[msg.sender].locate))) {
            weight += 5;
        }
    }

    //给审核者打标签(目前考虑手动)
    function createValidatorsDomain(string[] memory domain) public {
        for(uint i=0; i < domain.length; i++) {
            validators[msg.sender].domianScore[domain[i]] = 1;//审核者在该领域熟悉度初值为1
        }
    }

    //给新闻打标签(目前考虑手动)
    function createNewsDomain(string memory newsUrl, string[] memory domain) public {
        for(uint i=0; i < domain.length; i++) {
            newsDomain[newsUrl].push(domain[i]);
        }
    }

    //投票
    function vote(string memory newsUrl, bool judge) public {
        News storage news = URLtoNews[newsUrl];
        require(news.isVoted[msg.sender] == false, "you have already voted");
        if(judge == true) {
            news.rightNumber += calculateWeight(newsUrl);
            news.rightVoters.push(msg.sender);
            news.isVoted[msg.sender] = true;
        }
        if(judge == false) {
            news.wrongNumber += calculateWeight(newsUrl);
            news.wrongVoters.push(msg.sender);
            news.isVoted[msg.sender] = true;
        }
    }

    //结算
    function suttle(string memory newsUrl) public {
        News storage news = URLtoNews[newsUrl];
        if(news.rightNumber > news.wrongNumber) {
            news.state = 1;//判定新闻为真
            for(uint i = 0; i < news.rightVoters.length; i++) {
                token.transfer(news.rightVoters[i], 1);//获取代币
                validators[news.rightVoters[i]].creditScore += 1;//信用分+1
                for(uint j=0; j < newsDomain[newsUrl].length; j++) {
                    validators[news.rightVoters[i]].domianScore[newsDomain[newsUrl][j]] += 1;//领域熟悉度+1
                }
            }
            newsPublisher[news.publisher].authorScore += 1;
        }
        else if(news.rightNumber < news.wrongNumber) {
            news.state = -1;//判定新闻为假
            for(uint i = 0; i < news.wrongVoters.length; i++) {
                token.transfer(news.wrongVoters[i], 1);//获取代币
                validators[news.wrongVoters[i]].creditScore += 1;//信用分+1
                for(uint j = 0; j < newsDomain[newsUrl].length; j++) {
                    validators[news.wrongVoters[i]].domianScore[newsDomain[newsUrl][j]] += 1;//领域熟悉度+1
                }
            }
            newsPublisher[news.publisher].authorScore -= 1;
        }
        else news.state = 0;
    }

    //快速排序
    function quickSort(string[] storage arr, int left, int right) internal {
        int i = left;
        int j = right;
        if (i == j) return;
        int256 pivot = newsPublisher[arr[uint((left + right) / 2)]].authorScore;
        while (i <= j) {
            while (newsPublisher[arr[uint(i)]].authorScore > pivot) i++;
            while (pivot > newsPublisher[arr[uint(j)]].authorScore) j--;
            if (i <= j) {
                string memory temp = arr[uint(i)];
                arr[uint(i)] = arr[uint(j)];
                arr[uint(j)] = temp;
                i++;
                j--;
            }
        }
        if (left < j)
            quickSort(arr, left, j);
        if (i < right)
            quickSort(arr, i, right);
    }

    //排名
    function sortPublishers() public {
        uint256 n = allPublishers.length;
        quickSort(allPublishers, int(0), int(n - 1));
        int currentRank = 0;
        for (uint256 i = 0; i < n; i++) {
            currentRank++;
            newsPublisher[allPublishers[i]].rank = currentRank;
        }
    }
}
