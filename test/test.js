elements.DishSoap = {
    color: "#eeffba",
    behavior: behaviors.LIQUID,
    category: "liquids",
    viscosity: 100000,
    state: "liquid",
    density: 720,
};
if (!elements.DishSoap.reactions) { // Include this block once
    elements.DishSoap.reactions = {} // This creates the property if it doesn't exist
}
elements.DishSoap.reactions.water = { "elem1":null, "elem2":"cloud" )
