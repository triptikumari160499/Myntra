import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './style.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Form1 from "../Chat/Properties/Form";
import swal from "sweetalert";
import Main from "../Chatbot/mainfile";
import Mainfile from '../Chatbot/mainfile';
// import Chatbot from "./chatbot";
class Style extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            modalShow : false,
            chatBot : false
        };
     } 
    render() {
        
        const share = () => {
            swal("Good job!", "You clicked the button!", "success");
        }
        return (
            <div id="back">
                <header>

                <div className="chatbot">
                 <Button variant="light" onClick={()=>this.setState({chatBot:!this.state.chatBot})} className = "float"><i class="fas fa-robot my-float"></i>
                </Button>
             
                {this.state.chatBot?<Mainfile />:""}   
                
                </div>

                
                    <div id="nav">

                        <img
                            src="https://images.assettype.com/afaqs%2F2021-01%2F51966c7c-de5b-4092-ac03-e1f5e6152b32%2Fmyntra.png?auto=format%2Ccompress&w=1200"></img>
                        <div id="items">
                            <h4 id="one">MEN
                        <div id="line"></div>
                            </h4>
                            <h4 id="two">WOMEN
                        <div id="line"></div>
                            </h4>
                            <h4 id="three">KIDS
                        <div id="line"></div>
                            </h4>
                            <h4 id="four">HOME & LIVING
                        <div id="line"></div>
                            </h4>
                            <h4 id="five">OFFERS
                        <div id="line"></div>
                            </h4>
                        </div>
                        <div id="searchbar">
                            <i class="ri-search-line"></i>
                            <h5>Search for products, brands and more</h5>
                        </div>

                        <div id="profile">
                            <i id="pro" class="ri-account-pin-circle-line">
                                <div id="line"></div>
                            </i>
                            <i class="ri-star-line"></i>
                            {/* Links to the Chat Component */}
                            <Link to="/chat"><i class="chaticon">Chat</i></Link>

                            <div>
            

                                {/* <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                                
                                                </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}


                            </div>


                            <i class="ri-shopping-bag-line"></i>
                        </div>
                    </div>
                    <div id="overlay">
                        <div id="main">
                            <div id="a" class="elem">
                                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/dc6cf926-8dfe-4161-b4d0-e78c622df2771615743989381-Desktop-Shop-Now.gif"
                                    alt=""></img>
                            </div>
                            <div id="b" class="elem">
                                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/1ae5e872-3528-463a-8968-d4edb5a281791615735151188-Lifestyle_Desk_Banner.jpg"
                                    alt=""></img>
                            </div>
                            <div id="c" class="elem">
                                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/92d441e5-422c-425b-91a6-0da8c398f55c1615735151174-cat-fest-dk-mar.jpg"
                                    alt=""></img>
                            </div>
                        </div>

                    </div>            
                    {/* This renders the modal form, when the friends button is clicked see below the modalShow is set to True */}
                        <Form1
                            show={this.state.modalShow}
                            onHide= {() => this.setState({modalShow:false})}
                        />

                    <h1>DEALS OF THE DAY</h1>
                    <div id="deals">

                        <div id="deals1" >
                            <div class="dealsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/7a39ffa4-210d-4c35-a1bf-98d29663805a1615736485485-UpTo250.jpg"
                                    alt=""></img>

                            </div>
                            
                           
                        </div>

                        <div id="deals2">
                            <div class="dealsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/7e60ddec-f03f-4e01-9f60-1257b8ea9df51615736485547-40-70.jpg"
                                    alt=""></img>
                            </div>

                        </div>
                        <div id="deals3">
                            <div class="dealsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/d76ff356-91d0-49b7-8e8a-f6d7871d11521615736485500-Under799.jpg"
                                    alt=""></img>
                            </div>

                        </div>
                        <div id="deals4">
                            <div class="dealsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/1a84dc3a-d4c7-4d5f-b4e7-e112b6605a441615736817893-UpTo50.jpg"
                                    alt=""></img>
                            </div>

                        </div>
                        <div id="deals5">
                            <div class="dealsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/909c4d71-5bf1-49e4-81e5-a7dac1af1d751615736817878-UpTo30.jpg"
                                    alt=""></img>
                            </div>

                        </div>
                    </div>
                    <h1 id="d">BIGGEST DEALS ON TOP BRANDS</h1>
                    <div id="bigdeals">
                        <div id="bigdeals1">
                            <div class="bigdealsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpg"
                                    alt=""></img>
                            </div>

                        </div>
                        <div id="bigdeals2">
                            <div class="bigdealsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg"
                                    alt=""></img>
                            </div>

                        </div>
                        <div id="bigdeals3">
                            <div class="bigdealsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/0524cbd5-f034-4155-9e3b-336c4e530ee41605363272658-Home---Levis.jpg"
                                    alt=""></img>
                            </div>

                        </div>
                        <div id="bigdeals4">
                            <div class="bigdealsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg"
                                    alt=""></img>
                            </div>

                        </div>
                        <div id="bigdeals5">
                            <div class="bigdealsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg"
                                    alt=""></img>
                            </div>

                        </div>
                    </div>
                    <div id="bigdeals2A">
                        <div id="bigdeals2a">
                            <div class="bigdeals2img">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="bigdeals2b">
                            <div class="bigdeals2img">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/d5c17859-f366-4a65-ab42-5a066254feaa1605363272474-Home---GAP.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="bigdeals2c">
                            <div class="bigdeals2img">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/5544cd64-d95b-461d-802a-8025fdfeb3331605363272844-Home---Nike.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="bigdeals2d">
                            <div class="bigdeals2img">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="bigdeals2e">
                            <div class="bigdeals2img">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <h1 id="e">CATEGORIES TO BAG</h1>
                    <div id="categories">
                        <div id="categories1">
                            <div class="categoriesimg">
                                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/89f1bd9d-3a28-456d-888a-beff717a06f81594222908155-Shirts.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="categories2">
                            <div class="categoriesimg">
                                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/9ff1f34e-9242-47fd-9566-e7d7a5c240511594222908483-T-shirt.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="categories3">
                            <div class="categoriesimg">
                                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/720cf6ef-3be4-4825-8211-0125c942e3821594222907960-Jeans.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="categories4">
                            <div class="categoriesimg">
                                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/2bac5e2d-337b-42c0-88c7-3d4e2dc464141594222908262-Shorts-_-Trousers.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="categories5">
                            <div class="categoriesimg">
                                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/ae14f627-9fd9-41ce-80a4-f107c316c7eb1594222907625-Casual-shoes.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="categories6">
                            <div class="categoriesimg">
                                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/f0f9b81a-b9d5-4b8b-94d5-ea878fa9b18e1594222834121-Infant-Essential.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div id="categories2A">
                        <div id="categories2a">
                            <div class="categoriesimg">
                                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/8d992d81-49e6-4dec-89a4-49a8af8beb5d1594222967220-Kurtas-_-Kurta-Sets.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="categories2b">
                            <div class="categoriesimg">
                                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a048cca8-7b5d-417e-9645-ca98f4b6e52c1594222967506-Sarees.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="categories2c">
                            <div class="categoriesimg">
                                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/b0f459a0-9ef0-4392-a9ed-23892a36e79c1594222966859-Dresses.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="categories2d">
                            <div class="categoriesimg">
                                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a4dedaa4-3710-4061-b7d6-ca8c83ce9d021594222967117-Heels.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="categories2e">
                            <div class="categoriesimg">
                                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/a352f908-57c8-4c66-b052-18137cf15e6c1594222967074-Handbags.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="categories2f">
                            <div class="categoriesimg">
                                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/8/18eb31db-8dcb-4efa-b92d-61c8ebe0ee811594222834368-Shorts.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <h1 id="f">EXPLORE TOP BRANDS</h1>
                    <div id="explore">
                        <div id="explore1">
                            <div class="exploreimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/a88b9390-5adb-493b-a1b3-702c59ccf53a1598348260502-Nike.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="explore2">
                            <div class="exploreimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/c9f66558-feab-4d76-aa3c-adc68d81dce21598348260415-Levis.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="explore3">
                            <div class="exploreimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/178c1e5d-69f2-402f-a2a5-ef44700a0f691596640983793-Roadster---.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="explore4">
                            <div class="exploreimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/085719b1-c71e-4f47-950c-9a6b7f291fac1598348260370-Jack-_-Jones.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="explore5">
                            <div class="exploreimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/774f42c4-f459-4514-9b90-cf8a60a5f68c1596644478087-hrx30.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div id="explore2A">
                        <div id="explore2a">
                            <div class="exploreimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f6e40444-b1a4-4c91-bb3c-fe213356e7de1598348260541-Only.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="explore2b">
                            <div class="exploreimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/5/a6de806a-b58b-460b-97fd-d78d80eab39b1596641021693-Women-s-Ethnic-Wear_Anouk.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="explore2c">
                            <div class="exploreimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/8d13b55d-a6a0-40ae-b39f-16f43e7911681598348260460-MAC.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="explore2d">
                            <div class="exploreimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/046ab589-87d5-4afa-8ab3-10e06fdbe6a61598348260596-W.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="explore2e">
                            <div class="exploreimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/25/f2fdda02-423c-4f11-8f1b-618ba807e5841598348260323-H_M.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <h1>TRENDING IN WESTERN WEAR</h1>
                    <div id="western">
                        <div id="western1">
                            <div class="westernimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/655751e9-66c3-49b5-acfc-a508068e6e581595936000398-Content-westernwear-Trends-Vibrantcolourblocks.jpg"
                                    alt=""></img>
                            </div>
                            <div class="card-link-div ">
                                <Button variant="light" style={{ cursor: "pointer" }} onClick={share} class="card-link"><i class="far fa-heart"></i></Button>
                            
                         
                                <Button variant="light" id="button" onClick={()=> this.setState({modalShow:true})} class="card-link"><i class="fas fa-user-friends"></i></Button>
                                <Link to="/chat">
                                    <Button variant="light" ><i class="fas fa-share-alt"></i>                    
                                    </Button>
                                </Link>
                                <Link to="/stories">
                                    <Button variant="light"><i class="fas fa-insta">Insta</i>                    
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div id="western2">
                            <div class="westernimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div class="westernimg">
                            <div id="western3">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d53a46d7-e8f8-4f7e-9e1a-6cb997d1a1e51597840566613-Content-westerncasual-brand-modarapidoskinnyjeans.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="western4">
                            <div class="westernimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b85eb6be-0223-4cca-bc81-56ca3089daf11597841355970-Content-westernwear-Essentials-Women-s-Trousers--copy--.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="western5">
                            <div class="westernimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div id="western2A">
                        <div id="western2a">
                            <div class="westernimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f7585d6d-78ee-42bd-baf2-07eefada7fb31597840566666-Content-westerncasual-color-moss.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="western2b">
                            <div class="westernimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d7f59b96-8e15-470e-a47b-5d5005e4273f1597840566776-Content-westerncasual-mostselling-modblocking.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="western2c">
                            <div class="westernimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8116410f-af2c-4980-95ef-04a4162092491597840566722-Content-westerncasual-color-preppyred.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="western2d">
                            <div class="westernimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/580b804c-c529-421c-b0be-b311cab6e10b1598030134933-Content-mostselling-casualwear-Normalisboring.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="western2e">
                            <div class="westernimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/a6d9d467-d37e-4428-b2dd-a9f45756c1fc1595936000278-Content-westernwear-lifestyle-Ecovero.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <h1 id="f">TRENDING IN INDIAN WEAR</h1>
                    <div id="indian">
                        <div id="indian1">
                            <div class="indianimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a9f68785-e282-425a-b270-c978c387b0f31597840342635-Content-ethnicwear-color-whites.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="indian2">
                            <div class="indianimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/0d1e0a28-3088-4719-a692-4cdaa7a33cc71597840342726-Content-ethnicwear-occasion-casuallook.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="indian3">
                            <div class="indianimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9d248917-d1b0-4910-8de0-4ed7c2b4af8e1595935030939-Content-ethnicwear-trends-printedkurtaset.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="indian4">
                            <div class="indianimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/83d9ca97-4aa3-46ce-bd28-b135d3b94a021595935030673-Content-ethnicwear-essentials-everydaykurtas.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="indian5">
                            <div class="indianimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9e4fb95e-6268-49c5-9ed1-e6b1bd4b5efd1595935030880-Content-ethnicwear-trend-fashionmeetcomfort.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div id="indian2A">
                        <div id="indian2a">
                            <div class="indianimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f0397d0f-9c2a-4c87-956e-9896b615b3061597840342772-Content-ethnicwear-trend-printparadise.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="indian2b">
                            <div class="indianimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/87b0957c-41f7-4522-9f30-f69087a0dce61597840342593-Content-ethnicwear-color-mustard.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="indian2c">
                            <div class="indianimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/2ff5c4e9-da10-4d12-9aae-86c38f4c281a1597840342549-Content-ethnicwear-brand-fusiondress.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="indian2d">
                            <div class="indianimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/99463248-ae80-47de-836f-3bafe2262bff1598029618274-Content-mostselling-Ethnicwear-Kurtasetsbiba.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="indian2e">
                            <div class="indianimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/e4fe9b08-9d0a-4349-868f-6ac5aa7123ed1595935030800-Content-ethnicwear-trend-Bsummerreadyethnicdresses.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <h1>TRENDING IN SPORTS WEAR</h1>
                    <div id="sports">
                        <div id="sports1">
                            <div class="sportsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8becef46-f822-4874-b92a-a7cc7f58819d1597841103131-Content-sportswear-brand-nike.png"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="sports2">
                            <div class="sportsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7472ab66-adf2-4d1d-9379-4770a73c1efe1597841103172-Content-sportswear-brand-proline.png"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="sports3">
                            <div class="sportsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4aa58fe6-8c61-4e37-9fa8-436c31aecb211597840566511-Content-sportswear-essentials-activewear.png"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="sports4">
                            <div class="sportsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/eedc6c0c-c28b-4ccb-952f-a302c96c59ba1598030134978-Content-mostselling-Sportswear-Nikerevolution.jpeg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="sports5">
                            <div class="sportsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/65bafbc5-f83b-4158-8168-f7553043814c1597841103082-Content-sportswear-brand-Asics.png"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div id="sports2A">
                        <div id="sportsa">
                            <div class="sportsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/48f02c04-8b83-495b-a2df-27ed8a9837a61597840566563-Content-sportswear-mostselling-skechers.png"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="sportsb">
                            <div class="sportsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/7c0ac6d4-94aa-4c56-b6e7-86f7367a1ead1597841103213-Content-sportswear-brand-UA.png"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="sportsc">
                            <div class="sportsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ffc6f4f2-9541-47a2-ba12-e3c68c9407461595935799402-Content-sportswear-Women-Under-Armour-daily-wear-Joggers.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="sportsd">
                            <div class="sportsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/ba7ebb65-b743-4947-b7b0-2f62a3c912cf1595935799269-Content-sportswear-Women-Athleisure.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="sportse">
                            <div class="sportsimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/0faf749f-5450-4550-8b48-54b2d2e311b51595935799329-Content-sportswear-Women-Running.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <h1>TRENDING IN FOOTWEAR</h1>
                    <div id="footwear">
                        <div id="footwear1">
                            <div class="footwearimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/647e166b-f645-443a-892d-df84ee345e781595935221231-Content-Footwear-men-Neutral-shades.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="footwear2">
                            <div class="footwearimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/9654b0f9-42a9-4111-a4b7-27b26c5a22d41595935221284-Content-Footwear-Unisex-Sneakers-for-Dancers_.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="footwear3">
                            <div class="footwearimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/be0b0d6f-7c72-4752-859f-ee44902ff7171597912691244-Content-footwear-trend-sneakersmen.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="footwear4">
                            <div class="footwearimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/a84d687a-1ff3-4b06-a47b-48021ba7cec11597840342959-Content-footwear-occasion-outbackoutdoor.png"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="footwear5">
                            <div class="footwearimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/49dd1ce9-d627-4c6e-b544-4be7e1f24a091597840342867-Content-footwear-essentials-flipflops.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div id="footwear2A">
                        <div id="footweara">
                            <div class="footwearimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/cb3b10a6-a216-4f20-a4f1-81828bc923581597912691297-Content-footwear-trend-sneakerswomen.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="footwearb">
                            <div class="footwearimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/bb73b79f-ff6e-4472-b9da-33f5747c6d861597840342909-Content-footwear-occasion-classics.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="footwearc">
                            <div class="footwearimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/1fb4a81c-d5e2-4e46-93d8-b6a87ca92c021597840342817-Content-footwear-color-colorblock.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="footweard">
                            <div class="footwearimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/cb3b10a6-a216-4f20-a4f1-81828bc923581597912691297-Content-footwear-trend-sneakerswomen.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="footweare">
                            <div class="footwearimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/1b444433-164b-4551-9749-d2915a286ee01595935221365-Content-Footwear-Women-Comfort-Wear.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <h1>TRENDING IN ACCESSORIES</h1>
                    <div id="access">
                        <div id="access1">
                            <div class="accessimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/2bcf907c-bc21-44cb-9021-7575a963b0ef1595934830671-Content-Accesories-Unisex-True-wirless-lets-get-free.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="access2">
                            <div class="accessimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/bddd9c73-e4f1-43c0-a073-2ff3c0e376b51595934830554-Content-Accesories-men-Sporty-Watches_.jpg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="access3">
                            <div class="accessimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="access4">
                            <div class="accessimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8363b55c-446f-4de2-bc5b-e75fd6fdfb2d1597840217862-Content-accessories-brand-fastrack.png"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="access5">
                            <div class="accessimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/274b3659-420d-43c2-8e4c-17249e6eaf8d1597840218139-Content-accessories-trend-minimalist.png"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                    <div id="access2A">
                        <div id="accessa">
                            <div class="accessimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/225f77f5-c299-4849-8586-3ed41b70b1f91597840217917-Content-accessories-brand-imittire.png"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="accessb">
                            <div class="accessimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b5fb5332-cad0-4c04-bd5e-70189f5efef01597840218056-Content-accessories-mostselling-mangalsutra.png"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="accessc">
                            <div class="accessimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/4dbcc869-ba34-43df-8348-56c7816363c41597840218100-Content-accessories-trend-handcraftedjewel.png"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="accessd">
                            <div class="accessimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/bc36f35b-f5ce-4168-bd96-d3c1f65ec4e21598030134870-Content-mostselling-Accessories-Rosegoldwatch.jpeg"
                                    alt=""></img>
                            </div>
                        </div>
                        <div id="accesse">
                            <div class="accessimg">
                                <img src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/5e68d729-b955-431c-930c-931d8b452d421597840217983-Content-accessories-color-white.png"
                                    alt=""></img>
                            </div>
                        </div>
                    </div>
                </header>
                <hr >
                </hr>
                <footer id="footer">
                    <div id="footer1">
                        <div id="online">
                            <h5>ONLINE SHOPPING</h5>
                            <div class="list">
                                <h6>Men</h6>
                                <h6>Women</h6>
                                <h6>Kids</h6>
                                <h6>Home & Living</h6>
                                <h6>Offers</h6>
                                <h6>Gift Cards</h6>
                                <h6>Myntra Insider</h6>
                            </div>
                        </div>
                        <div id="links">
                            <h5>USEFUL LINKS</h5>
                            <div class="list">
                                <h6>Contact Us</h6>
                                <h6>FAQ</h6>
                                <h6>T&C</h6>
                                <h6>Terms Of Use</h6>
                                <h6>Track Orders</h6>
                                <h6>Shipping</h6>
                                <h6>Cancellation</h6>
                                <h6>Returns</h6>
                                <h6>Whitehat</h6>
                                <h6>Blog</h6>
                                <h6>Careers</h6>
                                <h6>Privacy Policy</h6>
                                <h6>Site Map</h6>
                            </div>
                        </div>
                        <div id="app">
                            <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
                            <div id="app1">
                                <div class="apps">
                                    <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                                        alt=""></img>
                                </div>
                                <div id="app2" class="apps">
                                    <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                                        alt=""></img>
                                </div>
                            </div>
                            <h5 id="keep">KEEP IN TOUCH</h5>
                            <div id="social">
                                <div id="icon1" class="icons">
                                    <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
                                        alt=""></img>
                                </div>
                                <div class="icons">
                                    <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
                                        alt=""></img>
                                </div>
                                <div class="icons">
                                    <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
                                        alt=""></img>
                                </div>
                                <div class="icons">
                                    <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
                                        alt=""></img>
                                </div>
                            </div>

                        </div>
                        <div id="info">
                            <div id="info1">
                                <div class="infoimg">
                                    <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                                        alt=""></img>
                                </div>
                                <div class="infoimg">
                                    <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                                        alt=""></img>
                                </div>
                                <div class="infoimg">
                                    <img src="https://constant.myntassets.com/web/assets/img/cafa8f3c-100e-47f1-8b1c-1d2424de71041574602902399-truck.png"
                                        alt=""></img>
                                </div>
                            </div>
                            <div id="info2">
                                <div id="p1" class="infotxt">
                                    <p>100% ORIGINAL guarantee for all products at myntra.com.</p>
                                </div>
                                <div class="infotxt">
                                    <p>Return within 30days of receiving your order.</p>
                                </div>
                                <div class="infotxt">
                                    <p>Get free delivery for every order above Rs. 799.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="line">
                        <h5>POPULAR SEARCHES</h5>
                        <hr></hr>
                    </div>
                    <div id="footer2">
                        <a href="#">Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men |
                        Handbags | Ladies Watches | Bags | Sport Shoes |
                        Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike
                        Smart Watches | Titan Watches | Designer
                        Blouse | Gowns | Rings | Cricket Shoes | Forever 21 Eye Makeup | 6- Frames | Punjabi Suits |
                        Bikini | Myntra Fashion Show | Lipstick |
                        Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos Shoes | Adidas
                        Shoes | Woodland Shoes | Jewellery | Designers
                    Sarees|</a>
                        <div id="contact">
                            <div id="contact1">
                                <h6>In case of any concern,</h6>
                                <span><a href="#">Contact Us</a></span>
                            </div>
                            <div id="copyright">
                                <h6>&copy 2021 www.myntra.com.All rights reserved.</h6>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <hr></hr>
                    <div id="footer3">

                        <div id="office1">
                            <h5>Registered Office Address</h5>
                            <h6>Buildings Alyssa,</h6>
                            <h6>Begonia and Clover situated in Embassy Tech Village,</h6>
                            <h6>Outer Ring Road,</h6>
                            <h6>Devarabeesanahalli Village,</h6>
                            <h6>Varthur Hobli,</h6>
                            <h6>Bengaluru – 560103, India</h6>
                        </div>
                        <div id="office2">
                            <h6>CIN: U72300KA2007PTC041799</h6>
                            <h6 id="t1">Telephone: +91-80-61561999</h6>
                        </div>
                    </div>
                    <hr></hr>
                    <div id="text1">
                        <h5>ONLINE SHOPPING MADE EASY AT MYNTRA</h5>
                        <p>If you would like to experience the best of online shopping for men, women and kids in India, you are
                        at the right
                        place. Myntra is the ultimate destination for fashion and lifestyle, being host to a wide array of
                        merchandise including
                        clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine
                        your style statement
                        with our treasure-trove of trendy items. Our online store brings you the latest in designer products
                        straight out of
                        fashion houses. You can shop online at Myntra from the comfort of your home and get your favourites
                        delivered right to
                    your doorstep.</p>
                    </div>
                    <div id="text2">
                        <h5>BEST ONLINE SHOPPING SITE IN INDIA FOR FASHION</h5>
                        <p>Be it clothing, footwear or accessories, Myntra offers you the ideal combination of fashion and
                        functionality for men,
                        women and kids. You will realise that the sky is the limit when it comes to the types of outfits
                        that you can purchase
                    for different occasions.</p>
                        <div id="list1">

                            <ol>
                                <li>
                                    <h6>Smart men’s clothing</h6>
                                    <p>At Myntra you will find myriad options in smart formal shirts and trousers, cool T-shirts
                                    and jeans, or kurta and pyjama
                                    combinations for men. Wear your attitude with printed T-shirts. Create the
                                    back-to-campus vibe with varsity T-shirts and
                                    distressed jeans. Be it gingham, buffalo, or window-pane style, checked shirts are
                                    unbeatably smart. Team them up with
                                    chinos, cuffed jeans or cropped trousers for a smart casual look. Opt for a stylish
                                    layered look with biker jackets.
                                    Head out in cloudy weather with courage in water-resistant jackets. Browse through our
                                    innerwear section to find
                                supportive garments which would keep you confident in any outfit.</p>
                                </li>
                                <li>
                                    <h6>Trendy women’s clothing </h6>
                                    <p>Online shopping for women at Myntra is a mood-elevating experience. Look hip and stay
                                    comfortable with chinos and
                                    printed shorts this summer. Look hot on your date dressed in a little black dress, or
                                    opt for red dresses for a sassy
                                    vibe. Striped dresses and T-shirts represent the classic spirit of nautical fashion.
                                    Choose your favourites from among
                                    Bardot, off-shoulder, shirt-style, blouson, embroidered and peplum tops, to name a few.
                                    Team them up with skinny-fit
                                    jeans, skirts or palazzos. Kurtis and jeans make the perfect fusion-wear combination for
                                    the cool urbanite. Our grand
                                    sarees and lehenga-choli selections are perfect to make an impression at big social
                                    events such as weddings. Our
                                    salwar-kameez sets, kurtas and Patiala suits make comfortable options for regular wear.
                            </p>
                                </li>
                                <li>
                                    <h6>Fashionable footwear </h6>
                                    <p>While clothes maketh the man, the type of footwear you wear reflects your personality. We
                                    bring you an exhaustive lineup
                                    of options in casual shoes for men, such as sneakers and loafers. Make a power statement
                                    at work dressed in brogues and
                                    oxfords. Practice for your marathon with running shoes for men and women. Choose shoes
                                    for individual games such as
                                    tennis, football, basketball, and the like. Or step into the casual style and comfort
                                    offered by sandals, sliders, and
                                    flip-flops. Explore our lineup of fashionable footwear for ladies, including pumps,
                                    heeled boots, wedge-heels, and
                                    pencil-heels. Or enjoy the best of comfort and style with embellished and metallic
                                flats.</p>
                                </li>
                                <li>
                                    <h6>Stylish accessories </h6>
                                    <p>Myntra is one of the best online shopping sites for classy accessories that perfectly
                                    complement your outfits. You can
                                    select smart analogue or digital watches and match them up with belts and ties. Pick up
                                    spacious bags, backpacks, and
                                    wallets to store your essentials in style. Whether you prefer minimal jewellery or grand
                                    and sparkling pieces, our
                                online jewellery collection offers you many impressive options.</p>
                                </li>
                                <li>
                                    <h6>Fun and frolic </h6>
                                    <p>Online shopping for kids at Myntra is a complete joy. Your little princess is going to
                                    love the wide variety of pretty
                                    dresses, ballerina shoes, headbands and clips. Delight your son by picking up sports
                                    shoes, superhero T-shirts, football
                                    jerseys and much more from our online store. Check out our lineup of toys with which you
                                can create memories to cherish.</p>
                                </li>
                                <li>
                                    <h6>Beauty begins here </h6>
                                    <p>You can also refresh, rejuvenate and reveal beautiful skin with personal care, beauty and
                                    grooming products from Myntra.
                                    Our soaps, shower gels, skin care creams, lotions and other ayurvedic products are
                                    specially formulated to reduce the
                                    effect of aging and offer the ideal cleansing experience. Keep your scalp clean and your
                                    hair uber-stylish with shampoos
                                and hair care products. Choose makeup to enhance your natural beauty.</p>
                                </li>
                            </ol>
                        </div>
                        <p>Myntra is one of the best online shopping sites in India which could help transform your living
                        spaces completely. Add
                        colour and personality to your bedrooms with bed linen and curtains. Use smart tableware to impress
                        your guest. Wall
                        decor, clocks, photo frames and artificial plants are sure to breathe life into any corner of your
                    home.</p>
                    </div>
                    <div id="text3">
                        <h5>AFFORDABLE FASHION AT YOUR FINGERTIPS</h5>
                        <p>Myntra is one of the unique online shopping sites in India where fashion is accessible to all. Check
                        out our new
                        arrivals to view the latest designer clothing, footwear and accessories in the market. You can get
                        your hands on the
                        trendiest style every season in western wear. You can also avail the best of ethnic fashion during
                        all Indian festive
                        occasions. You are sure to be impressed with our seasonal discounts on footwear, trousers, shirts,
                        backpacks and more.
                    The end-of-season sale is the ultimate experience when fashion gets unbelievably affordable.</p>
                    </div>
                    <div id="text4">
                        <h5>MYNTRA INSIDER</h5>
                        <p>Every online shopping experience is precious. Hence, a cashless reward-based customer loyalty program
                        called Myntra
                        Insider was introduced to enhance your online experience. The program is applicable to every
                        registered customer and
                    measures rewards in the form of Insider Points.</p>
                        <p>There are four levels to achieve in the program, as the Insider Points accumulate. They are -
                        Insider, Select, Elite or
                        Icon. Apart from offering discounts on Myntra and partner platform coupons, each tier comes with its
                    own special perks.</p>
                        <div id="insider">
                            <h5>Insider</h5>
                            <div class="list2">
                                <ul>
                                    <li>Opportunity to master any domain in fashion with tips from celebrity stylists at Myntra
                                Masterclass sessions.</li>
                                    <li>Curated collections from celeb stylists.</li>
                                </ul>
                            </div>
                        </div>
                        <div id="elite">
                            <h5>Elite</h5>
                            <div class="list2">
                                <ul>
                                    <li>VIP access to special sale events such as the End of Reason Sale (EORS) and product
                                launches.</li>
                                    <li>Exclusive early access to Limited Edition products</li>
                                </ul>
                            </div>
                        </div>
                        <div id="icon">
                            <h5>Icon</h5>
                            <div class="list2">
                                <ul>
                                    <li>Chance to get on guest lists for special events.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="text5">
                        <h6>Myntra Studio - The Personalised Fashion Feed You Wouldn’t Want To Miss Out On</h6>
                        <p>The world wide web is evolving at a relentless pace, and with an accelerated growth each passing
                        year, there is bound to
                        be an overwhelming surge of online content. It was for this very reason that personalisation of
                        search feeds was
                    proposed as a solution to combat the overload of irrelevant information.</p>
                        <p>Several social media platforms such as Facebook and Instagram along with various online shopping
                        websites have chosen to
                    help filter content, increasing user engagement, retention and customer loyalty.</p>
                        <p>Myntra is one such online shopping website that joins the list of platforms that help curate a
                        personalised fashion
                        feed. Named theMyntra Studio, this personalised search feed brings you the latest men and women’s
                        fashion trends,
                    celebrity styles, branded content and daily updates from your favourite fashion labels.</p>
                        <p>If you are wondering how impactful Myntra Studio can be, we are listing out five perks of having a
                        rich, meaningful, and
                        personalised fashion feed in your life.
                </p>
                        <div id="list3">
                            <ol>
                                <li>
                                    <h6>Keep Up With What Your Favourite Fashion Icons Are Upto</h6>
                                    <p>The #OOTD, AKA outfit of the day hashtag trend has been a rage among fashion bloggers and
                                    stylists. The whole concept of
                                    building an outfit from scratch and showcasing it to a huge community of enthusiasts
                                    using the hashtag has helped
                                individuals with understanding trends and making suitable for daily wear.</p>
                                    <p>Imagine if you could keep up with every piece of clothing and accessory worn by the
                                    fashion icons you look upto. From
                                    Sonam Kapoor to Hailey Baldwin Bieber, Myntra Studio has a ‘Stories’ feature to help
                                    track celebrity fashion trends,
                                    exploring details such as their outfit of the day. This way, you would not ever miss out
                                    on the latest celebrity fashion
                                trends, from all around the world.</p>
                                </li>
                                <li>
                                    <h6>Quick Fashion Tip And Tricks</h6>
                                    <p>Whether it is draping a saree into a dhoti style, wearing the right lingerie under
                                    certain dresses or discovering
                                    multiple uses out of heavy ethnic wear, Myntra Studio will help you acquire some unique
                                    and useful fashion hacks. Each
                                    hack is designed with the intention to help you get the best wear out of everything in
                                your wardrobe.</p>
                                </li>
                                <li>
                                    <h6>Updates on What Is Trending and New Product Launches</h6>
                                    <p>Since fast fashion seems to be extremely hard to keep up with these days, a quick update
                                    on what is trending in
                                    accessories, clothing and footwear would certainly be of great help. Myntra Studio helps
                                    you stay connected to the most
                                    beloved and sought after brands such as Puma, Coverstory, The Label Life and so many
                                    more.
                            </p>
                                    <p>Your feed keeps you updated with stories of what the brands are creating including
                                    clothing, footwear and jewellery,
                                along with their new seasonal collections.</p>
                                </li>
                                <li>
                                    <h6>Explicit Step-By-Step Beauty Routines From Experts</h6>
                                    <p>Just like fashion, the beauty community keeps on growing, and with brands such as Huda
                                    Beauty, MAC and the latest Kay
                                    Beauty by Katrina Kaif, are constantly coming up with mind-blowing products. Whether it
                                    is creating a no-makeup look,
                                    different winged eyeliners, do-it-yourself facial masks and other personal care beauty
                                    routines, Myntra Studio is here
                                for you.</p>
                                </li>
                                <li>
                                    <h6>Celebrity Confessions And A Look Into Their Lives</h6>
                                    <p>A bonus feature that Myntra Studio has in store for you is celebrity confessions and a
                                    peek into their lives. So, Myntra
                                helps you stay connected to your most beloved celebrities in a matter of clicks.</p>
                                    <p>If you are very particular when it comes to the content you wish to view and engage with
                                    on social media, the ability to
                                    intricately filter content helps achieve that. Applying the same formula for hardcore
                                    fashion lovers and shoppers,
                                    Myntra Studio brings you a daily fashion fix incorporating everything that you love, all
                                    at one place. Sign up on Myntra
                                today and start organising your fashion feed, just the way you want to.</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div id="text6">
                        <h5>MYNTRA APP</h5>
                        <p>Myntra, India’s no. 1 online fashion destination justifies its fashion relevance by bringing something new and chic to
                        the table on the daily. Fashion trends seem to change at lightning speed, yet the Myntra shopping app has managed to
                        keep up without any hiccups. In addition, Myntra has vowed to serve customers to the best of its ability by introducing
                        its first-ever loyalty program, The Myntra Insider. Gain access to priority delivery, early sales, lucrative deals and
                        other special perks on all your shopping with the Myntra app. Download the Myntra app on your Android or IOS device
                today and experience shopping like never before!</p>
                    </div>
                    <div id="text7">
                        <h5>HISTORY OF MYNTRA</h5>
                        <p>Becoming India’s no. 1 fashion destination is not an easy feat. Sincere efforts, digital enhancements and a team of
                        dedicated personnel with an equally loyal customer base have made Myntra the online platform that it is today. The
                        original B2B venture for personalized gifts was conceived in 2007 but transitioned into a full-fledged ecommerce giant
                        within a span of just a few years. By 2012, Myntra had introduced 350 Indian and international brands to its platform,
                        and this has only grown in number each passing year. Today Myntra sits on top of the online fashion game with an
                astounding social media following, a loyalty program dedicated to its customers, and tempting, hard-to-say-no-to deals.</p>
                        <p>The Myntra shopping app came into existence in the year 2015 to further encourage customers’ shopping sprees. Download
                the app on your Android or IOS device this very minute to experience fashion like never before</p>
                    </div>
                    <div id="text8">
                        <h5>SHOP ONLINE AT MYNTRA WITH COMPLETE CONVENIENCE</h5>
                        <p>Another reason why Myntra is the best of all online stores is the complete convenience that it offers. You can view your
                        favourite brands with price options for different products in one place. A user-friendly interface will guide you
                        through your selection process. Comprehensive size charts, product information and high-resolution images help you make
                        the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The
                        30-day returns policy gives you more power as a buyer. Additionally, the try-and-buy option for select products takes
                customer-friendliness to the next level.</p>
                        <p>Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your
                friends, family and loved-ones and avail our gift services for special occasions.</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Style;