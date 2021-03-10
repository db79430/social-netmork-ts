import React from "react";

type PropsType = {


}


 export function Profile (props:PropsType) {
    return (
        <div className="main">

            <div>
                  <img src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/>
            </div>
            <div className="ava">

                <img src='https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG'/>
                ava+description
            </div>
            <div>
                my posts
                <div>
                    New posts
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>


    )
}