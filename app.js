// Grab elements from the DOM
const gallery = document.getElementById("gallery");
const popupVideo = document.getElementById("popupVideo");
const popupImage = document.getElementById("popupImage");
const selectedVideoNft = document.getElementById("selectedVideoNft");
const selectedImageNft = document.getElementById("selectedImageNft");

// Assign nft sources
const nftVideoIndexes = [
  {
    url: "https://vhqqvhb3a2eeqdfwez7fp4l7fehmi2qfo27hzd2uiqdv3n2xxaga.arweave.net/qeEKnDsGiEgMtiZ-V_F_KQ7EagV2vnyPVEQHXbdXuAw?ext=mp4",
    title: "OG Pass Blue #413"
  }
];

const nftImageIndexes = [
  {
    url: "https://g4kbxb3bfzpumhrr6bfo6zqcv3vct43rluvux2ackoy5xcm7ox2q.arweave.net/NxQbh2EuX0YeMfBK72YCruop83FdK0voAlOx24mfdfU/?ext=png",
    title: "3D Catpunk #1752"
  },
  {
    url: "https://oraukjl53ag5zobubgrxqz2wnwetr7bekfgekyjwsp3am3qsmaga.arweave.net/dEFFJX3YDdy4NAmjeGdWbYk4_CRRTEVhNpP2Bm4SYAw/?ext=png",
    title: "SOLENFORCERS #809"
  },
  {
    url: "https://cdn.enjinx.io/metadata/raw/09486270b64d6496b49204eff3f3f128940d9c42/1ff79b0ecd7804700f19c0b1ace5ba3db257c252.png",
    title: "Enjineer #125677"
  }
];

// Loop through nft images
for (let i = 0; i < nftImageIndexes.length; i++) {
  let nft = nftImageIndexes[i];

  const nftImageCard = document.createElement("div");
  nftImageCard.setAttribute("id", "galleryNftCard");

  const nftImage = document.createElement("img");

  nftImage.src = `${nft.url}`;
  nftImage.alt = `${nft.title}`;
  nftImage.classList.add("galleryNft");

  const nftImageTitle = document.createElement("h4");
  nftImageTitle.classList.add("galleryNftTitle");
  nftImageTitle.innerHTML = `${nft.title}`;

  // Handle image pop up open
  nftImage.addEventListener("click", () => {
    popupImage.style.transform = `translateY(0)`;
    selectedImageNft.src = `${nft.url}`;
    selectedImageNft.alt = `${nft.title}`;
  });

  nftImageCard.appendChild(nftImage);
  nftImageCard.appendChild(nftImageTitle);
  gallery.appendChild(nftImageCard);
}

// Loop through nft videos
for (let i = 0; i < nftVideoIndexes.length; i++) {
  let nft = nftVideoIndexes[i];

  const nftVideoCard = document.createElement("div");
  nftVideoCard.setAttribute("id", "galleryNftCard");

  const nftVideo = document.createElement("video");

  nftVideo.src = `${nft.url}`;
  nftVideo.classList.add("galleryNft");
  nftVideo.preload = "auto";
  nftVideo.muted = "true";
  nftVideo.autoplay = "true";
  nftVideo.loop = "true";

  const nftVideoTitle = document.createElement("h4");
  nftVideoTitle.classList.add("galleryNftTitle");
  nftVideoTitle.innerHTML = `${nft.title}`;

  // Handle image pop up open
  nftVideo.addEventListener("click", () => {
    popupVideo.style.transform = `translateY(0)`;
    selectedVideoNft.src = `${nft.url}`;
  });

  nftVideoCard.appendChild(nftVideo);
  nftVideoCard.appendChild(nftVideoTitle);
  gallery.appendChild(nftVideoCard);
}

// Handle image pop up close
popupImage.addEventListener("click", () => {
  popupImage.style.transform = `translateY(-100%)`;
  popupImage.src = "";
});

// Handle video pop up close
popupVideo.addEventListener("click", () => {
  popupVideo.style.transform = `translateY(-100%)`;
  popupVideo.src = "";
});
