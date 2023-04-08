0xBD960F0A5Be3487A56258678695D77c3518A4d07
// FDToken

0xBD960F0A5Be3487A56258678695D77c3518A4d07
//ULToken

0x79B756E388Fb673Ae57086ed3C4FEA544962B4A5
//Vote

const FDAddress = "0xBD960F0A5Be3487A56258678695D77c3518A4d07";
const ULTokenAddress = "0xBD960F0A5Be3487A56258678695D77c3518A4d07";
const VoteAddress = "0x79B756E388Fb673Ae57086ed3C4FEA544962B4A5";

import FDAbi from "./FDToken.json" assert { type: 'json' };
import ULAbi from "./ULToken.json" assert { type: 'json' };
import VoteAbi from "./Vote.json" assert { type: 'json' };

export default{
    FDAddress,
    ULTokenAddress,
    VoteAddress,
    FDAbi,
    ULAbi,
    VoteAbi
};
