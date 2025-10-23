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
        <h1>Comparing 3D-Gaussian Splatting ,NeRFs and Photogrammetry in 3D Reconstruction from 2D Images</h1>
        </header>

      <section className='section-brief-introduction'>
      <h2>Brief Introduction</h2>
        <p>
        This resource explores three 3D reconstruction techniques used widely today. They are the following: 3D Gaussian Splatting (3DGS), photogrammetry, and Neural Radiance Fields (NeRFs). Additionally, this site provides a blueprint with step-by-step instructions on how to use OpenSplat (an open-source software used to rasterize 3D scenes). Additionally, it consists of interactive examples featuring banana and truck models, each of which is rendered at three different splat densities (2,000, 6,000, and 30,000 splats) to demonstrate the quality and performance. Lastly, it also explores a comparison of each other through the topics of strengths, limitations, and real-world applications.
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

      <section className='section-example-3dgs'>
      <h2>Example of 3DGS using OpenSplat(Open Source 3DGS Software)</h2>
        <p>
          We have used OpenSplat to render the 3DGS of a banana and a truck. OpenSplat is an open source 3DGS software that is free to use and is available on <a href="https://github.com/pierotofy/OpenSplat" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
      </section>

    <section className='section-step-1-3dgs'>
      <h2>Step 1: Clone the OpenSplat repository from GitHub</h2>
        <p>
        The first step is to clone the repository from GitHub locally. Installing the dependencies for appropriate hardware is an essential next step. OpenSplat works best with NVIDIA, AMD, and Apple hardware. The setup for each piece of hardware is a little different. For instance, Apple metal works differently, NVIDIA hardware has CUDA (software for hardware), and AMD has ROCm. Personally I have had success with Ubuntu and Mac systems, as they’re convenient to use.
        </p>
    </section>
    <section className='section-step-2-3dgs'>
      <h2>Step 2: Creating sparse points from the Structure from motion (SfM)</h2>
        <p>
        The two-dimensional images need to be processed through structure from motion. It is a process in which the 2D images are converted into 3D sparse clouds. These sparse clouds hold the blueprint of the two-dimensional images in 3D space. To make this happen, software like COLMAP, NerfStudio, OpenSfM, ODM, and OpenMVG are used.  
        </p>
    </section>
    <section className='section-step-3-3dgs'>
      <h2>Step 3: Final process to obtain .ply and cameras. json files (output files)</h2>
        <p>
        The final step is to obtain the output through processing the sparse points input and adding colors, depth, brightness, and other details to the sparse points. This is done through a series of steps. Each step is a process of creating the 3-D scene. The minimum number of steps to create a 3-D scene is 2000 steps. To get a photorealistic 3D scene, 30k-50k steps are necessary; this will ensure a photorealistic quality for the scene. Once these steps are done, the output is in the form of a .ply and cameras.json file. The obtained .ply file can be viewed through online 3D viewers like SuperSplat, PlayCanvas, or any other viewers.  
        </p>
    </section>
    <section className='section-Example-3dgs'>
      <h2>Example of 3DGS using Splatter.app</h2>
        <p>
        We have used Splatter.app to render the 3DGS of a banana and a truck using the .ply and cameras.json files obtained from OpenSplat.
        </p>
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
      <section className='section-conclusion'>
        <h2>Side by Side Comparison of 3DGS, NeRFs and Photogrammetry</h2>
        
        <div className="comparison-container">
          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th className="aspect-column">Aspect</th>
                  <th className="technology-column">3DGS</th>
                  <th className="technology-column">NeRF</th>
                  <th className="technology-column">Photogrammetry</th>
                </tr>
              </thead>
              <tbody>
                <tr className="category-header">
                  <td colSpan={4}><strong>PERFORMANCE & SPEED</strong></td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Hardware Requirements</td>
                  <td>Modern GPU (RTX 3000+ series recommended) 8-24 GB VRAM for rendering</td>
                  <td>GPU required for training. Can be CPU-rendered (very slow)</td>
                  <td>CPU processing possible. GPU accelerates reconstruction</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Rendering Speed</td>
                  <td>60-120+ FPS at high resolution</td>
                  <td>Seconds to minutes per frame</td>
                  <td>Depends on mesh complexity</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Training Time</td>
                  <td>5-30 minutes on modern GPU</td>
                  <td>Hours to days (1-48 hours typical)</td>
                  <td>Minutes to hours depending on scene complexity</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Editability</td>
                  <td>Can edit individual Gaussians. Emerging tools for editing</td>
                  <td>Hard to edit specific regions. Requires retraining for changes</td>
                  <td>Full mesh editing in any 3D software. Standard workflows</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Exportability</td>
                  <td>Can export as point cloud or mesh (with loss). Not standard format yet</td>
                  <td>Must bake to mesh (quality loss). Primarily for rendering only</td>
                  <td>Standard formats (OBJ, FBX, GLTF). Universal compatibility</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Camera Pose Requirements</td>
                  <td>Precise poses required</td>
                  <td>Precise poses required</td>
                  <td>Calculated automatically</td>
                </tr>
                
                <tr className="category-header">
                  <td colSpan={4}><strong>VISUAL QUALITY</strong></td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Photorealism</td>
                  <td>Near-identical to NeRF quality. Captures fine details and textures</td>
                  <td>State-of-the-art photorealism. Best for complex lighting</td>
                  <td>Realistic but can show mesh artifacts. Quality depends on photo coverage</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Novel View Quality</td>
                  <td>Smooth interpolation between views. Minimal artifacts</td>
                  <td>Continuous representation. Perfect interpolation</td>
                  <td>Quality degrades with extreme angles. Depends on mesh quality</td>
                </tr>
                
                <tr className="category-header">
                  <td colSpan={4}><strong>VR & GAME ENGINE COMPATIBILITY</strong></td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Unity Integration</td>
                  <td>Custom renderers available. UnityGaussianSplatting plugin</td>
                  <td>Pre-rendered only. No native real-time support</td>
                  <td>Native mesh support. Standard import workflow</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Unreal Engine Integration</td>
                  <td>Community plugins emerging, Real-time rendering possible</td>
                  <td>Research projects only, Not production-ready</td>
                  <td>Full native support, Nanite compatible</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">VR Headset Performance</td>
                  <td>60-90 FPS achievable, Stereo rendering supported</td>
                  <td>Too slow for real-time VR, Pre-rendered 360° only</td>
                  <td>Standard VR rendering, Optimized pipelines</td>
                </tr>
                
                <tr className="category-header">
                  <td colSpan={4}><strong>USE CASES & APPLICATIONS</strong></td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Real-time VR Experiences</td>
                  <td>Photorealistic + real-time, Emerging as new standard</td>
                  <td>Pre-rendered experiences only</td>
                  <td>Proven technology, Widest tool support</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Virtual Tourism</td>
                  <td>Real-time exploration, Photorealistic quality, Growing adoption</td>
                  <td>Pre-rendered tours only, Exceptional visual quality, Limited interactivity</td>
                  <td>Full freedom of movement, Editable environments, Proven solution</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Game Development</td>
                  <td>Experimental use cases, Real-time performance, Limited tooling currently</td>
                  <td>Background assets only, No real-time gameplay, Baking required</td>
                  <td>Standard asset creation, Full engine integration, Complete workflow</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Architectural Visualization</td>
                  <td>Real-time walkthroughs, Client presentations, Limited editing</td>
                  <td>High-quality renders, Pre-rendered flythrough, Not for design iteration</td>
                  <td>Full design workflow, Easy modifications, Industry standard</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Cultural Heritage Preservation</td>
                  <td>Fast capture processing, Interactive exploration, Photorealistic archival</td>
                  <td>Highest quality preservation, Perfect for archival, Research standard</td>
                  <td>Measurable 3D data, Conservation analysis, Long-term standard</td>
                </tr>
                
                <tr>
                  <td className="aspect-cell">Film/VFX Production</td>
                  <td>Background environments, Real-time previsualization, New to pipeline</td>
                  <td>High-quality renders, Research applications, Offline rendering</td>
                  <td>Industry standard, Full pipeline integration, Asset creation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
