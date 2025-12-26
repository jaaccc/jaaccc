const greeting = "hi, i’m jacob";
const introduction = "a fourth-year computer engineering student at toronto metropolitan university with hands-on experience across hardware and software. " +
    "i enjoy working with fpga and cmos circuit design, web development, and ui/ux design.";

typewriter ("index-greeting", greeting, 100, 300, () => {
    typewriter ("index-introduction", introduction, 15);
});
