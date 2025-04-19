import StyledImage from "../../../lib/image-usage"

export default function Profilepicture() {
  return (
    <div className="p-9">
      <StyledImage
        src={"/profile-picture.jpg"}
        alt="Person in white hoodie"
        width={500}
        height={500}
      />
    </div>
  )
}
