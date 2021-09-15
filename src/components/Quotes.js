import React from 'react'
import Quote from './Quote'

const Quotes = (props) => {

    return (
                <ul className="list-group">
                {props.data.map((quote, i) => (
                  <Quote
                    key={i}
                    text={quote.text}
                    votes={quote.votes}
                    add={props.add}
                    subtract={props.subtract}
                  />
                ))}
              </ul>
            );
          };

        
    // <div>
    //     <ul class="list-group list-group-flush">
    //         <li class="list-group-item">"Child labor laws are ruining this country."</li>
    //         <li class="list-group-item">"An hour ago a giant fireball consumed my entire face and it was far preferable to spending another second with you."</li>
    //         <li class="list-group-item">"There is only one bad word: taxes."</li>
    //         <li class="list-group-item">"Creativity is for people with glasses who like to lie."</li>
    //         <li class="list-group-item">"People who buy things are suckers."</li>
    //         <li class="list-group-item">"Are you going to tell a man that he can't fart in his own car?"</li>
    //         <li class="list-group-item">"I wanna punch you in the face so bad right now."</li>
    //         <li class="list-group-item">"Fish, for sport only, not for meat. Fish meat is practically a vegatable."</li>
    //         <li class="list-group-item">"I've had the same will since I was 8 years old. Upon death, I will transfer all of my belongings to the man or animal who has killed me."</li>
    //         <li class="list-group-item">"No home is complete without a proper toolbox. Here's April and Andy's: A hammer, a half eaten pretzel, a baseball card, some cartridge that says Sonic and Hedgehog,a scissor half, a flashlight filled with jellybeans."</li>
    //     </ul> 
    // </div>


export default Quotes

