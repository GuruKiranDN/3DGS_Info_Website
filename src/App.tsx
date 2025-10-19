import './App.css'
import Carousel from './components/Carousel'

function App() {
  // Placeholder images for carousels
  const photogrammetryImages = [
    'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1760819104/3DGS/PH1_cfr2wi.png',
    'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1760819104/3DGS/PH2_yxd8qg.png',
    'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1760819104/3DGS/PH3_laqrw9.png'
  ]
  
  const nerfImages = [
    'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1760819104/3DGS/Nerf1_lfnts0.png',
    'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1760819104/3DGS/Nerf2_us8i7v.png',
    'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1760819104/3DGS/Nerf3_rveg2u.png'
  ]
  
  const gaussianSplattingImages = [
    'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1760819105/3DGS/3DGS1_gvy1sq.png',
    'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1760819105/3DGS/3DGS2_rkijrw.png',
    'https://res.cloudinary.com/dkv4qdfkz/image/upload/v1760819105/3DGS/GDGS3_d1f1bg.png'
  ]

  return (
    <main>
       <header>
        <h1>Comparing 3D-Gaussian Splatting ,NeRFs and Photogrammetry in 3D Reconstruction</h1>
        </header>

      <section className='section-brief-introduction'>
      <h2>Brief Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facere magni, possimus numquam non error iusto nulla reprehenderit saepe esse quisquam vitae, asperiores eius facilis autem dolorem labore magnam quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facere magni, possimus numquam non error iusto nulla reprehenderit saepe esse quisquam vitae, asperiores eius facilis autem dolorem labore magnam quia.
        </p>
      </section>

      <section className='section-photogrammetry'>
      <h2>Photogrammetry</h2>
        <p>
        This process involves creating 3D models of real-world objects by taking multiple photographs of the same objects from various angles and then using software to process these images and reconstruct them into detailed 3D representations. It has been around for a while now (since the early 2000s) and is currently the market standard for rendering 3D objects from 2D inputs for VR and other 3D workflows. 
        </p>
        <p>
        The process of photogrammetry starts with photographs of an object that needs to be reconstructed in 3D. These photographs have to be overlapping in nature for better quality of the reconstruction. The software analyzes each image for its corresponding features, such as textures, edges, and corners. This system then matches features with sparse points of the 2D images. This is called structure from motion (SfM). This algorithm also calculates the exact position and orientation of each camera so that the 3D reconstruction can take place. The sparse points are then connected with each other in a triangular form, and they are called mesh. These meshes collectively form the 3D reconstruction from a two-dimensional space.
        </p>
        <Carousel images={photogrammetryImages} title="Photogrammetry Process" />
      </section>

      <section className='section-nerfs'>
      <h2>Neural Radiance Fields (NeRFs)</h2>
        <p>
        Neural Radiance Fields are a new and novel technique of rendering 3D models. Unlike photogrammetry, which relies on meshes for reconstruction, NeRF uses neural networks (AI, deep learning, and machine learning) to represent the two-dimensional images as a 5D (2D+3D) function to render the new 3D scene. This creates views from angles that were never photographed before.
        </p>
        <p>
        This process starts with 2D images from various angles. Each ray is traced (the process of following the light from the source or the camera position), and the color, density, lighting, and other parameters are fed into the 5D (3D+2D) function, and the neural network output creates new and novel views from points and angles that are new and never captured by the camera.
        </p>
        <Carousel images={nerfImages} title="NeRF Process" />
      </section>
      <section className='section-3dgs'>
      <h2>3D-Gaussian Splatting</h2>
        <p>
        3DGS is a nascent rendering technique that was introduced in 2023. Unlike traditional photogrammetry and NeRF, 3DGS represents 3D scenes as millions of tiny 3D Gaussian blobs floating in space. Individually, each of them is a fuzzy, colored ellipsoid that can be rendered incredibly fast—making it perfect for real-time VR rendering with photorealistic quality. 
        </p>
        <p>
          It starts with 2D images from all the angles. These photos then run through the Structure from Motion (SfM) for sparse point clouds. Then these sparse point clouds are populated with fuzzy 3D ellipsoids, which hold properties like position, size, rotation, color, and opacity. "Splatting" is the rendering process where 3D Gaussians are projected onto your 2D screen. First, all Gaussians are sorted from front to back based on their distance from the camera. Then each 3D Gaussian is projected onto the screen, creating a 3D elliptical blob. These blobs are blended together using alpha compositing (like Photoshop layers), where closer Gaussians appear on top of farther ones. The result is a photorealistic image.
        </p>
        <Carousel images={gaussianSplattingImages} title="3D Gaussian Splatting Process" />
      </section>

      <section aria-labelledby="banana-heading">
        <h2 id="banana-heading">Banana (Data Set 1)</h2>
        <div className="iteration-grid">
          <article>
            <h3>2,000 Iterations</h3>
            <iframe 
              src="https://splatter.app/s/eo9-khl" 
              width="500" 
              height="500" 
              allowFullScreen
              title="Banana 3D Gaussian Splatting - 2000 iterations"
              style={{border: 'none', borderRadius: '8px'}}
            />
          </article>

          <article>
            <h3>6,000 Iterations</h3>
            <iframe 
              src="https://splatter.app/s/1ie-zov" 
              width="500" 
              height="500" 
              allowFullScreen
              title="Banana 3D Gaussian Splatting - 6000 iterations"
              style={{border: 'none', borderRadius: '8px'}}
            />
          </article>

          <article>
            <h3>30,000 Iterations</h3>
            <iframe 
              src="https://splatter.app/s/pjy-ig5" 
              width="500" 
              height="500" 
              allowFullScreen
              title="Banana 3D Gaussian Splatting - 30000 iterations"
              style={{border: 'none', borderRadius: '8px'}}
            />
          </article>
        </div>
      </section>

      <section aria-labelledby="truck-heading">
        <h2 id="truck-heading">Truck (Data Set 2)</h2>
        <div className="iteration-grid">
          <article>
            <h3>2,000 Iterations</h3>
            <iframe 
              src="https://splatter.app/s/fw7-x6a" 
              width="500" 
              height="500" 
              allowFullScreen
              title="Truck 3D Gaussian Splatting - 2000 iterations"
              style={{border: 'none', borderRadius: '8px'}}
            />
          </article>

          <article>
            <h3>6,000 Iterations</h3>
            <iframe 
              src="https://splatter.app/s/kvn-e07" 
              width="500" 
              height="500" 
              allowFullScreen
              title="Truck 3D Gaussian Splatting - 6000 iterations"
              style={{border: 'none', borderRadius: '8px'}}
            />
          </article>

          <article>
            <h3>30,000 Iterations</h3>
            <iframe 
              src="https://splatter.app/s/q3x-gp6" 
              width="500" 
              height="500" 
              allowFullScreen
              title="Truck 3D Gaussian Splatting - 30000 iterations"
              style={{border: 'none', borderRadius: '8px'}}
            />
          </article>
        </div>
      </section>
    </main>
  )
}

export default App
