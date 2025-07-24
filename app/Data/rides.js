// land rides data
const landRides = [
  {
    id: 1,
    title: "Sky Ring",
    description:
      "Kochi Shoot up a sky-high tower for a birds-eye view of Wonderla Kochi!",
    location: "Kochi",
    category: "Land",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Sky_Ring_480p_1749236cd3.mp4",
  },
  {
    id: 2,
    title: "Mission Interstellar",
    description:
      "Blast through cosmic chaos on a wild, out-of-this-world space ride!",
    location: "Bengaluru",
    category: "Land",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/MI_3s_H_5_MB_8dd71dc2ec.mp4",
  },
  {
    id: 3,
    title: "G Fall",
    description:
      "Brace yourself for a heart-pounding, high-speed plunge into a dizzying freefall!",
    location: "Hyderabad",
    category: "Land",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/G_Fall_480p_54a0131d48.mp4",
  },
  {
    id: 4,
    title: "Wonderla Bamba",
    description:
      "Perfect for first time thrill-seekers, this takes you on a spin with sudden drops and bursts of speed that will leave you wanting more!",
    location: "Bhubaneswar",
    category: "Land",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Wonderla_Bamba_480p_51837c9805.mp4",
  },
  {
    id: 5,
    title: "Space Gun",
    description:
      "See the world upside-down, dangling from high up above the ground!",
    location: "Kochi",
    category: "Land",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Space_Gun_480p_a91b755b34.mp4",
  },
  {
    id: 6,
    title: "Recoil",
    description:
      "India's first-ever action-packed reverse looping roller coaster ride!",
    location: "Bengaluru",
    category: "Land",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Recoil_480p_dd3c781929.mp4",
  },
  {
    id: 7,
    title: "Hyperverse",
    description:
      "Get transported to another world as you soar through a breathtaking 3D metaverse!",
    location: "Hyderabad",
    category: "Land",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Hyperverse_480p_c539001b46.mp4",
  },
  {
    id: 8,
    title: "Equinox",
    description:
      "A thrill monster that flips you around 360 degrees in a gravity-defying spin.",
    location: "Bhubaneswar",
    category: "Land",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Equinox_480p_bafc65400f.mp4",
  },
  {
    id: 9,
    title: "Air Race",
    description:
      "An exhilarating flight simulation with banks, loops and dives.",
    location: "Kochi",
    category: "Land",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Air_Race_480p_5d9fb9b2f6.mp4",
  },
  {
    id: 10,
    title: "Y-Scream",
    description:
      "Strap in tight to swing, spin and scream on this dizzying 360-degree thrill fest!",
    location: "Bengaluru",
    category: "Land",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Y_Scream_480p_0a746cad75.mp4",
  },
];

// water rides data
const waterRides = [
  {
    id: 1,
    title: "Water Pendulum",
    description:
      "Hold on tight as you glide up and down on a water tube across a U-shaped slide!",
    location: "Kochi",
    category: "Water",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Water_Pendulam_480p_53805faa9e.mp4",
  },
  {
    id: 2,
    title: "Drop Loop",
    description:
      "Slide down a sky-high slope, twist through a loop and make a splashy exit!",
    location: "Bengaluru",
    category: "Water",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Drop_Loop_480p_604a9571a6.mp4",
  },
  {
    id: 3,
    title: "Sea Lagoon",
    description:
      "Get soaked, splashed and sprayed in this thrilling pool paradise!",
    location: "Hyderabad",
    category: "Water",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Sea_Lagoon_480p_072171123b.mp4",
  },
  {
    id: 4,
    title: "Wave Pool",
    description:
      "Experience the bliss of waves washing over you, far away from the sea.",
    location: "Bhubaneswar",
    category: "Water",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Wave_Pool_1_480p_7ff2c460ac.mp4",
  },
  {
    id: 5,
    title: "Korneto",
    description:
      "Slide, swirl and splash through a whirling vortex on this slippery ride!",
    location: "Kochi",
    category: "Water",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Korneto_480p_76298a8b68.mp4",
  },
  {
    id: 6,
    title: "Bullet",
    description:
      "Navigate through twists, tunnels and loops on 3 epic water slides!",
    location: "Bengaluru",
    category: "Water",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Banded_Kraits_480p_191dfcc9cf.mp4",
  },
  {
    id: 7,
    title: "Screw",
    description:
      "Get ready to rush through dizzying turns and loops at mind-blowing speeds!",
    location: "Hyderabad",
    category: "Water",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Skrew_480p_e740d8313b.mp4",
  },
  {
    id: 8,
    title: "Drop & Tornado",
    description:
      "Zoom down through a twisty maze of 4 thrilling tunnels into a splashy escape!",
    location: "Bhubaneswar",
    category: "Water",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Drop_480p_592faaf01c.mp4",
  },
  {
    id: 9,
    title: "Water Falls",
    description: "Get drenched under a cascading waterfall with steep rocks.",
    location: "Kochi",
    category: "Water",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Waterfall_480p_986c910678.mp4",
  },
  {
    id: 10,
    title: "Harakiri",
    description:
      "Rush down, take a breather, and slide back down to the finish for pure, non-stop thrill!",
    location: "Bengaluru",
    category: "Water",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Harakiri_480p_fb97d12eba.mp4",
  },
];

// kids rides data
const kidsRides = [
  {
    id: 1,
    title: "Happy Kangaroo",
    description:
      "Plummet into a safe freefall with a tall & cheerful kangaroo!",
    location: "Kochi",
    category: "Kids",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Happy_Kangaroo_480p_d24bd08f2f.mp4",
  },
  {
    id: 2,
    title: "Mini Coco Cup",
    description:
      "Spin around in a gigantic cup placed on a rotating turntable floor!",
    location: "Bengaluru",
    category: "Kids",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Mini_Coco_Cup_480p_1a7bd75ee8.mp4",
  },
  {
    id: 3,
    title: "Carousel",
    description: "Gallop around on colourful horses like a seasoned cowboy!",
    location: "Hyderabad",
    category: "Kids",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Carousel_480p_85c91d1be3.mp4",
  },
  {
    id: 4,
    title: "Crazy Cars",
    description:
      "Dash and crash into your friends’ cars in your very own Formula 1 circuit!",
    location: "Bhubaneswar",
    category: "Kids",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Crazy_Car_480p_c70c8a223b.mp4",
  },
  {
    id: 5,
    title: "Pony Train",
    description:
      "Hop onto a chariot-pulled pony ride through the world of fantasy!",
    location: "Kochi",
    category: "Kids",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Pony_Train_480p_6eb01f2b42.mp4",
  },
  {
    id: 6,
    title: "Kiddies Wheel",
    description:
      "A miniature giant wheel designed to give your children a taste of real thrill without being half as scary.",
    location: "Bengaluru",
    category: "Kids",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Kiddies_Wheel_480p_f961a5151c.mp4",
  },
  {
    id: 7,
    title: "Funky Monkey",
    description: "Plummet into a safe freefall with a tall & playful monkey!",
    location: "Hyderabad",
    category: "Kids",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Funky_Monkey_480p_29dfcf386b.mp4",
  },
  {
    id: 8,
    title: "Jack-O-Coaster",
    description:
      "Ride on the edge with sharp curves, steep climbs and dizzying drops!",
    location: "Bhubaneswar",
    category: "Kids",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Jack_o_Coaster_74a32315bb.mp4",
  },
  {
    id: 9,
    title: "Mini Pirate Ship",
    description:
      "Sail like a pirate on a miniature, adrenaline-filled flying boat!",
    location: "Kochi",
    category: "Kids",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Pirate_Ship_480p_b86cf5715a.mp4",
  },
  {
    id: 10,
    title: "Jumping Frog",
    description:
      "Hop on a frog and leap into ribbiting fun as you spin around!",
    location: "Bengaluru",
    category: "Kids",
    vid: "https://d22pimhl2qmbj7.cloudfront.net/public/Jumping_Frog_480p_c2a969782a.mp4",
  },
];

export default { landRides, waterRides, kidsRides };
