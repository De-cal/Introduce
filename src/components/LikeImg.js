export const LikeImg = ({ img }) => {
  return (
    <div className="img">
      <span>좋아하는 사진 : </span>
      <img src={img} alt="코드잇 이미지" width="100px" />
    </div>
  )
}