import "./ImageNumber.css";

export function ImageNumber({ number, total }) {
  return (
    <>
      <div className="image-number cinetrail-padding">
        Image {number + 1}/{total}
      </div>
    </>
  );
}
