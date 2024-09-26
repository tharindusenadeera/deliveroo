export const getAllFeaturedPosts = `*[_type == "featured"] {
        ...,
        restaurants[]->{
        ...,
        dishes[]->
        }
      }`;

export const getFeaturedPost = `*[_type == "featured" && _id == $id] {
        ...,
        restaurants[]->{
        ...,
        dishes[]->,
        type-> {
            name
            },
        }
    }[0]`;

export const getCategories = `*[_type == "category"]`;
