import React from "react";
import { ArrowLeftOutlined } from "../../components/ArrowLeftOutlined";
import { ArrowLeftOutlined3 } from "../../icons/ArrowLeftOutlined3";
import Collection from "../../components/Homepage/Collection";
import SlideComponent1 from "../../components/Slidebar/SlideComponent1";
import SlideComponent2 from "../../components/Slidebar/SlideComponent2";
import SlideComponent3 from "../../components/Slidebar/SlideComponent3";
import SlideComponent4 from "../../components/Slidebar/SlideComponent4";
import Board_component1 from "../../components/Board_component/Board_component1";
import Board_component2 from "../../components/Board_component/Board_component2";
import Board_component3 from "../../components/Board_component/Board_component3";
import Sol_Item from "../../components/Sol_board/Sol_Item";
import Sol_value from "../../components/Sol_board/Sol_value";
import Top_Item from "../../components/Top_bar/Top_Item";
import "./style.css";

export const VersionI = (): JSX.Element => {
  return (
    <div className="version-i">
      <div className="div">
        <div className="head-navigation">
          <div className="frame">
            <div className="frame-2">
              <div className="text-wrapper">BUXDAO</div>
              <div className="frame-3">
                <div className="group">
                  <div className="overlap-group">
                    <div className="total-supply">TOTAL SUPPLY</div>
                    <p className="p">10 000 000 000 $BUX</p>
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap">
                    <div className="sign-up-reward">SIGN UP REWARD</div>
                    <div className="text-wrapper-2">10 000 $BUX</div>
                  </div>
                </div>
                <div className="frame-4">
                  <div className="text-wrapper-3">CONNECT</div>
                  <img className="img" alt="Frame" src="/img/frame-40.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-5">
            <div className="rectangle" />
            <div className="frame-wrapper">
              <div className="frame-6">
                <Top_Item title="TOKENOMICS" src="/img/coin-svgrepo-com-1.svg" state="none"/>
                <Top_Item title="TEAM" src="/img/frame.svg" state="none"/>
                <Top_Item title="SLOTTO" src="/img/slot-svgrepo-com-1.svg" state="soon"/>
                <Top_Item title="GAMES" src="/img/frame-1.svg" state="soon"/>

                
              </div>
            </div>
          </div>
        </div>
        <div className="frame-10">
          <div className="frame-11">
            <p className="community-owned-NFT">COMMUNITY OWNED NFT ART STUDIO</p>
            <img className="polygon" alt="Polygon" src="/img/polygon-1-2.svg" />
          </div>
          <div className="frame-11">
            <p className="community-owned-NFT">COMMUNITY OWNED NFT ART STUDIO</p>
            <img className="polygon" alt="Polygon" src="/img/polygon-1-2.svg" />
          </div>
          <div className="frame-11">
            <p className="community-owned-NFT">COMMUNITY OWNED NFT ART STUDIO</p>
            <img className="polygon" alt="Polygon" src="/img/polygon-1-2.svg" />
          </div>
        </div>
        <div className="PROMOTION">
          <div className="overlap-2">
            <div className="arrow-left-outlined-wrapper">
              <ArrowLeftOutlined className="arrow-left-outlined-instance" />
            </div>
            <div className="group-2">
              <div className="arrow-left-outlined-3-wrapper">
                <ArrowLeftOutlined3 className="arrow-left-outlined-3" />
              </div>
            </div>
            
            <SlideComponent1 title="ALL ARTWORK IS TRADABLE ON THE SOLANA BLOCKCHAIN"/>
            <SlideComponent2 title="STAKE TO EARN DAILY REWARDS PAID IN OUR $BUX TOKEN"/>
            <SlideComponent3 title="UNLOCK HOLDER ONLY DISCORD CHANNELS FOR EXTRA CONTENT"/>
            <SlideComponent4 title="COMPETE IN MONTHLY POKER LEADERBOARD EVENTS"/>
          </div>
        </div>
        <div className="frame-13">
          <div className="frame-14">
            <img className="frame-15" alt="Frame" src="/img/frame-56.svg" />
            <div className="frame-16">
              <p className="solana-SOL">
                <span className="span">Solana · </span>
                <span className="text-wrapper-8">SOL</span>
              </p>
              <div className="text-wrapper-9">$99.43</div>
            </div>
          </div>
          <div className="frame-17">
            <div className="rectangle-2" />
            <Sol_value title="VALUE:" value="0.002" src="/img/9297384-sol-blockchain-coins-cryptocurrency-crypto-icon-1.svg"/>
            <div className="rectangle-2" />
            <Sol_Item title="TEAM WALLET:" value="23m" currency="$BUX"/>
            <div className="rectangle-2" />
            <Sol_Item title="CIRCULATION WALLET:" value="100m" currency="$BUX"/>
            <div className="rectangle-2" />
            <Sol_Item title="MY BALANCE:" value="534,032.65" currency="$BUX"/>
            <div className="rectangle-2" />

          </div>
          <div className="frame-22">
            <div className="text-wrapper-3">CASHOUT 4,2</div>
            <img className="img" alt="Frame" src="/img/frame-40-1.svg" />
          </div>
        </div>
        <div className="frame-23">
          <div className="frame-24">
            <img className="img-2" alt="Frame" src="/img/frame-2.svg" />
            <div className="text-wrapper-4">COLLECTIONS</div>
          </div>
          <Collection title="FCKED CATZ" value="0.45" src="/img/rectangle-48.png"/>
          <Collection title="CELEB CATZ" value="0.23" src="/img/rectangle-48-1.png"/>
          <Collection title="MONEY MONSTERS" value="0.09" src="/img/rectangle-48-2.png"/>
          <Collection title="MONEY MONSTERS 3D" value="0.23" src="/img/rectangle-48-3.png"/>
          <Collection title="AI BITBOTS" value="0.78" src="/img/rectangle-48-4.png"/>
        </div>
        <div className="rectangle-4" />
        <div className="text-wrapper-16">Established in March 2022</div>
        <p className="BUX-DAO-is-a-self">
          BUX$DAO IS A SELF GOVERNED WEB3 COMMUNITY CONSISTING OF THE HOLDERS OF OUR NFTS AND TOKEN.
        </p>
        <div className="frame-28">
          <Board_component1 src="/img/image-85.png" title="DISCORD FEATURES" content="Our discord server offers holder only access providing the community with regular competitions,
                    raffles, poker and game nights." btn_name="JOIN DISCORD" />
          <Board_component2 />
          <Board_component3 />
         
         
        </div>
      </div>
    </div>
  );
};
