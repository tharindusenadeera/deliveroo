export const getAllFeaturedPosts = `*[_type == "featured"] {
        ...,
        restaurants[]->{
        ...,
        dishes[]->
        }
      }`;
