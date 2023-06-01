import noImg from "../assets/no-img.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImg;
  const target = "media/";
  const crop = "crop/600/400/";

  const index = url.indexOf(target) + target.length;

  const cropped = url.slice(0, index) + crop + url.slice(index);

  return cropped;
};

export default getCroppedImageUrl;
