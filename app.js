// Grab elements from the DOM
const gallery = document.getElementById("gallery");
const popupVideo = document.getElementById("popupVideo");
const popupImage = document.getElementById("popupImage");
const selectedVideoNft = document.getElementById("selectedVideoNft");
const selectedImageNft = document.getElementById("selectedImageNft");

// Assign nft sources
const nftVideoIndexes = [
  {
    url: "https://storage.opensea.io/files/710d7d469570ecb840c5cf4b35534208.mp4",
    title: "CryptoWalkers #1751"
  },
  {
    url: "https://storage.opensea.io/files/073817a91a721da58391bff86b53557c.mp4",
    title: "Phantom Galaxies - Halberd 001"
  },
  {
    url: "https://vhqqvhb3a2eeqdfwez7fp4l7fehmi2qfo27hzd2uiqdv3n2xxaga.arweave.net/qeEKnDsGiEgMtiZ-V_F_KQ7EagV2vnyPVEQHXbdXuAw?ext=mp4",
    title: "OG Pass Blue #413"
  }
];

const nftImageIndexes = [
  {
    url: "https://ynjqbiv55vlre227mmwz4wokt5lgyct37njbrfkcmaf43ugiioxa.arweave.net/w1MAor3tVxJrX2MtnlnKn1ZsCnv7UhiVQmALzdDIQ64/?ext=png",
    title: "3D Catpunk #3982"
  },
  {
    url: "https://yiz3othrbj3rxuexbuwflv7wgnm45i2pcwecwuhqqnxuy67ki7sq.arweave.net/wjO3TPEKdxvQlw0sVdf2M1nOo08ViCtQ8INvTHvqR-U/?ext=png",
    title: "2D Catpunk #2576"
  },
  {
    url: "https://static-nft.pancakeswap.com/mainnet/0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07/sunny-1000.png",
    title: "Pancake Bunnies - Sunny"
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

  // Handle video pop up open
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
