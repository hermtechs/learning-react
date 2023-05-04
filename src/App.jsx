import { useState } from "react";
import WordBody from "./components/WordBody";
import FormElement from "./components/FormElement";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import NewForm from "./components/NewForm";

const text =
"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque tenetur voluptatum sunt a excepturi ad culpa consequatur velit eveniet vel sit sint perferendis delectus, debitis inventore illum ea, officia deleniti facere quis. Eligendi reprehenderit voluptates fugit, consequuntur corrupti pariatur accusantium similique voluptatem ipsa? Atque, neque. In ducimus ea distinctio nihil quibusdam laborum molestias optio tempora delectus excepturi? Nulla ad rerum repellat ab quidem illo maiores quos vero omnis corporis vitae sapiente delectus ipsa deserunt molestiae mollitia et qui, facere quisquam voluptates totam ratione vel. Reiciendis dolor dignissimos, harum recusandae id architecto, labore repellat ipsum eum et corporis laudantium repudiandae? Nemo aliquam suscipit, praesentium recusandae aut modi id odio maiores dolorem sed optio illum iste dolores ea soluta delectus! Corrupti voluptates amet culpa sapiente, minus non quae odit maxime saepe labore ratione! Neque unde nostrum aliquam necessitatibus dolorem minima, laboriosam possimus maiores ratione est officia aliquid pariatur quas sunt vitae magni. Expedita, eveniet. At, unde placeat fuga corrupti pariatur sapiente est suscipit tenetur minima, delectus deserunt dolore voluptas eveniet, non soluta! Minima voluptatibus officiis voluptates? Et, itaque tenetur magni reprehenderit exercitationem omnis doloremque minus molestiae. Alias laboriosam quis facere nostrum maiores suscipit possimus maxime nam repellat esse aliquam consequuntur magni totam perferendis eveniet minus atque beatae molestias, nesciunt nihil porro, aliquid ab? Labore facere harum, maxime quod consequatur illo facilis, architecto, sit fuga autem obcaecati ducimus neque. Voluptatem aliquid, quam perferendis voluptate nostrum ducimus quod, veniam nihil quo, minus vitae laborum ab sit itaque incidunt consectetur obcaecati explicabo enim quibusdam? Autem praesentium architecto atque iste quod doloribus perferendis nesciunt tempora. Dolore sed voluptas quod ipsa soluta vel, illum laborum consequatur mollitia eligendi dolor est dolorem molestiae culpa ad voluptatem voluptatibus earum! Ea facilis hic libero obcaecati mollitia natus molestias cumque! Minus amet alias pariatur, tempore hic possimus repudiandae inventore, nesciunt quis harum voluptatibus numquam similique atque suscipit ut enim, cupiditate voluptates! Quas cupiditate a dignissimos eos reiciendis animi harum, voluptatum nobis in dicta repudiandae exercitationem impedit assumenda delectus officiis eius, maiores neque tempora ea. Perferendis quaerat cum qui, minus maiores quas unde amet iure, fugit sunt vitae reprehenderit quasi illum. Qui expedita necessitatibus reiciendis et nam doloribus sed vel quia corrupti neque corporis dignissimos error velit magnam nihil ex officiis praesentium eligendi mollitia incidunt excepturi distinctio vitae, culpa voluptatum? Doloremque officia excepturi beatae ratione impedit unde iste sequi eligendi itaque blanditiis iure deserunt inventore, aut voluptates nobis eius, distinctio quisquam ducimus. Sequi id, repellat numquam, maxime labore iste molestiae iure quibusdam rerum magnam eius. Ullam ut hic mollitia optio alias dolores veniam reprehenderit dignissimos eligendi voluptatibus itaque ea corporis praesentium enim, magnam iste. Blanditiis odio, natus, velit repellat molestiae expedita ex quam ducimus ipsum eveniet qui excepturi obcaecati recusandae, eius explicabo perferendis? Aliquid doloribus expedita fugit cupiditate, at reiciendis dicta, suscipit assumenda laudantium quia sapiente ducimus vel asperiores tenetur. Iure, quasi. Libero quos optio magnam corrupti placeat illum repellendus praesentium, voluptate magni dolore eligendi natus ut similique suscipit accusamus molestias repudiandae vitae a dolores cum iure fugiat? Eaque sed recusandae quidem."

function App() {
  const [myText, setMyText] = useState(text);

  const slicedText = myText.slice(0, 5);
  useState(slicedText);
  // setMyText

  return <>
  {/* <WordBody>{text}</WordBody> */}
  {/* <FormElement/> */}
  <NewForm/>
  </> ;
}

export default App;
