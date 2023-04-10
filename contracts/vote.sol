// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "./ULToken.sol";
import "./FDToken.sol";

contract Vote {

    struct Validator{
        int creditScore;//信用分
        mapping(string => int) domianScore;//领域熟悉度
        string locate;//地址
        string picture;//头像
        string name;//姓名
        string[] votingURL_true;
        string[] votingURL_false;
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
        string[] news;
    }

    mapping(address => Validator) public validators;
    mapping(string => News) public URLtoNews;
    mapping(string => string[]) public newsDomain;
    mapping(string => Publisher) public newsPublisher;
    mapping(bytes32 => string) public description;
    string[] public allPublishers;
    FDToken _FDToken;
    ULToken _ULToken;

    //初始化审核者身份信息
    function initValidators(string memory locate, string memory _picture, string memory _name) public {
        validators[msg.sender].locate = locate;
        validators[msg.sender].picture = _picture;
        validators[msg.sender].name = _name;
    }

    //爬取新闻信息
    function initNews(string memory newsUrl, string[] memory domain, string memory publisherName, string memory locate) public {
        int done = 1;
        for(uint i = 0; i < newsPublisher[publisherName].news.length; i++) {
            if(sha256(bytes(newsPublisher[publisherName].news[i])) == sha256(bytes(newsUrl))) {
                done = 0;
                break;
            }
        }
        require(done == 1, "This news has already been recorded");

        newsPublisher[publisherName].news.push(newsUrl);
        createNewsDomain(newsUrl, domain);
        URLtoNews[newsUrl].publisher = publisherName;
        URLtoNews[newsUrl].locate = locate;
        int flag = 1;
        for(uint i = 0; i < allPublishers.length; i++) {
            if(sha256(bytes(allPublishers[i])) == sha256(bytes(publisherName))) {
                flag = 0;
                break;
            }
        }
        if(flag == 1) {
            Publisher memory pub;
            pub.name = publisherName;
            pub.rank = 0;
            pub.authorScore = 0;
            newsPublisher[publisherName] = pub;
            allPublishers.push(publisherName);
        }
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
        _FDToken = FDToken(0xBD960F0A5Be3487A56258678695D77c3518A4d07);
        _ULToken = ULToken(0xef6FC94Fe01666D6666ba042a5F6A8A7316F4b61);
    }

    //获取出版方的所有新闻
    function getNewsOfPublishers(string memory publisherName) public view returns (string[] memory _news){
        _news = newsPublisher[publisherName].news;
    }

    //获取个人的所有投票记录
    function getNewsOfPublishers(address validator) public view returns (string[] memory _votingURL_true, string[] memory _votingURL_false){
        _votingURL_true = validators[validator].votingURL_true;
        _votingURL_false = validators[validator].votingURL_false;
    }

    //获取个人信息
    function getValidatorInfo(address validator) public view returns (int _creditScore, string memory _locate, 
    string memory _picture, string memory _name){
        _creditScore = validators[validator].creditScore;
        _locate = validators[validator].locate;
        _picture = validators[validator].picture;
        _name = validators[validator].name;
    }

    //给提案编码
    function encoding(string memory newsURL, address validator) pure public returns(bytes32 code) {
        code = keccak256(abi.encodePacked(newsURL, validator));
    }

    //获取一个新闻的投票信息
    function getNews(string memory newsUrl) public view returns (int _rightNumber, int _wrongNumber, address[] memory _rightVoters, 
    address[] memory _wrongVoters, int _state, string memory _publisher) {
        _rightNumber = URLtoNews[newsUrl].rightNumber;
        _wrongNumber = URLtoNews[newsUrl].wrongNumber;
        _rightVoters = URLtoNews[newsUrl].rightVoters;
        _wrongVoters = URLtoNews[newsUrl].wrongVoters;
        _state = URLtoNews[newsUrl].state;
        _publisher = URLtoNews[newsUrl].publisher;
    }

    //获取某个人投票原因
    function getReason(string memory newsUrl, address validator) public view returns (string memory reason){
        reason = description[encoding(newsUrl, validator)];
    }

    //计算审核者在某一新闻上的权重
    function calculateWeight(string memory newsUrl) public view returns (int weight){
        weight = 1;
        //信用加权
        if(_FDToken.getOwnedToken(msg.sender) > 0)
            weight += _FDToken.getOwnedToken(msg.sender);
        //领域加权
        for(uint i=0; i < newsDomain[newsUrl].length; i++) {
            weight += validators[msg.sender].domianScore[newsDomain[newsUrl][i]]/10;
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
    function vote(string memory newsUrl, bool judge, string memory reason) public {
        News storage news = URLtoNews[newsUrl];
        require(news.isVoted[msg.sender] == false, "you have already voted");
        if(judge == true) {
            news.rightNumber += calculateWeight(newsUrl);
            news.rightVoters.push(msg.sender);
            news.isVoted[msg.sender] = true;
            validators[msg.sender].votingURL_true.push(newsUrl);
        }
        if(judge == false) {
            news.wrongNumber += calculateWeight(newsUrl);
            news.wrongVoters.push(msg.sender);
            news.isVoted[msg.sender] = true;
            validators[msg.sender].votingURL_false.push(newsUrl);
        }
        bytes32 code = encoding(newsUrl, msg.sender);
        description[code] = reason;
    }

    //结算
    function suttle(string memory newsUrl) public {
        News storage news = URLtoNews[newsUrl];
        if(news.rightNumber > news.wrongNumber) {
            news.state = 1;//判定新闻为真
            for(uint i = 0; i < news.rightVoters.length; i++) {
                _FDToken.transferGood(news.rightVoters[i], 1);//获取好币
                _ULToken.transfer(news.rightVoters[i], 1);
                validators[news.rightVoters[i]].creditScore += 1;//信用分+1
                for(uint j=0; j < newsDomain[newsUrl].length; j++) {
                    validators[news.rightVoters[i]].domianScore[newsDomain[newsUrl][j]] += 1;//领域熟悉度+1
                }
            }
            for(uint i = 0; i < news.wrongVoters.length; i++) {
                _FDToken.transferBad(news.wrongVoters[i], 1);//获取坏币
                _ULToken.transfer(news.wrongVoters[i], 1);
                validators[news.wrongVoters[i]].creditScore += 1;//信用分+1
                for(uint j = 0; j < newsDomain[newsUrl].length; j++) {
                    validators[news.wrongVoters[i]].domianScore[newsDomain[newsUrl][j]] += 1;//领域熟悉度+1
                }
            }
            newsPublisher[news.publisher].authorScore += 1;
        }
        else if(news.rightNumber < news.wrongNumber) {
            news.state = -1;//判定新闻为假
            for(uint i = 0; i < news.wrongVoters.length; i++) {
                _FDToken.transferGood(news.wrongVoters[i], 1);//获取好币
                validators[news.wrongVoters[i]].creditScore += 1;//信用分+1
                for(uint j = 0; j < newsDomain[newsUrl].length; j++) {
                    validators[news.wrongVoters[i]].domianScore[newsDomain[newsUrl][j]] += 1;//领域熟悉度+1
                }
            }
            for(uint i = 0; i < news.rightVoters.length; i++) {
                _FDToken.transferBad(news.rightVoters[i], 1);//获取坏币
                validators[news.rightVoters[i]].creditScore += 1;//信用分+1
                for(uint j=0; j < newsDomain[newsUrl].length; j++) {
                    validators[news.rightVoters[i]].domianScore[newsDomain[newsUrl][j]] += 1;//领域熟悉度+1
                }
            }
            newsPublisher[news.publisher].authorScore -= 1;
        }
        else news.state = 0;
    }

    //提交后的反馈
    function respond(string memory newsUrl) public {
        if(URLtoNews[newsUrl].wrongNumber + URLtoNews[newsUrl].rightNumber > 15) {
            suttle(newsUrl);
        }
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

//url1,[],a,x   url3,[],c,x   [a,b,c]   url1,false   url3,true
