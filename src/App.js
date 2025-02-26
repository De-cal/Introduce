import { MyName } from "./components/MyName"
import { MyMbti } from "./components/MyMbti"
import { MyIntro } from "./components/MyIntro"
import { LikeImg } from "./components/LikeImg"
import './App.css'

function App() {
  return (
    <div className="container">
      <MyName name="이태빈" />
      <MyMbti mbti="INTJ" />
      <MyIntro intro="풀스택 6기 스프린트 수강생입니다."/>
      <LikeImg img="https://www.codeit.kr/meta/og_tag.png"/>
    </div>
  )
}

export default App
