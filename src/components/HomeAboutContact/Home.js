import React from "react";
import "./styles.scss";

export default function Home({motion=false,pageTransition,...props}) {

  if(motion !== false){
    return (
      <motion.div
       initial="exit"
       animate="enter"
       exit="exit"
       variants={pageTransition}
      
      >
        <h1> Home frame</h1>
        <p>
          Mollit eu fugiat do laboris ex anim consequat reprehenderit eu culpa
          enim qui. Aliquip nulla aliquip nulla est culpa magna laborum sunt velit
          eu excepteur aliqua culpa do. Sint cillum proident aliqua nostrud fugiat
          occaecat magna veniam laborum ad nostrud. Officia aliqua sunt commodo
          esse reprehenderit elit deserunt labore cupidatat quis sint id. Sit nisi
          consequat ut Lorem id pariatur incididunt anim occaecat cupidatat
          commodo est sit.
        </p>
      </motion.div>
    )
  }
  else{
    return (
      <div>
        <h1>Home transition</h1>
        <p>
          Mollit eu fugiat do laboris ex anim consequat reprehenderit eu culpa
          enim qui. Aliquip nulla aliquip nulla est culpa magna laborum sunt velit
          eu excepteur aliqua culpa do. Sint cillum proident aliqua nostrud fugiat
          occaecat magna veniam laborum ad nostrud. Officia aliqua sunt commodo
          esse reprehenderit elit deserunt labore cupidatat quis sint id. Sit nisi
          consequat ut Lorem id pariatur incididunt anim occaecat cupidatat
          commodo est sit.
        </p>
      </div>
    );

  }


}
