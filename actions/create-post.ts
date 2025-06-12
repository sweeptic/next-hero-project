'use server';

export async function createPost() {
  console.log('create post');

    console.log('wait...')
    
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    
    console.log('done')
    

  // TODO revalidate the topic show page
}
