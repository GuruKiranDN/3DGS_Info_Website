import './App.css'

function App() {
  return (
    <main>
       <header>
        <h1>Comparing 3D-Gaussian Splatting ,NeRFs and Photogrammetry in 3D Reconstruction</h1>
        </header>
      <section>
      <h2>Creating 3DGS Splats (Iterative Training Method)</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facere magni, possimus numquam non error iusto nulla reprehenderit saepe esse quisquam vitae, asperiores eius facilis autem dolorem labore magnam quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facere magni, possimus numquam non error iusto nulla reprehenderit saepe esse quisquam vitae, asperiores eius facilis autem dolorem labore magnam quia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facere magni, possimus numquam non error iusto nulla reprehenderit saepe esse quisquam vitae, asperiores eius facilis autem dolorem labore magnam quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, facere magni, possimus numquam non error iusto nulla reprehenderit saepe esse quisquam vitae, asperiores eius facilis autem dolorem labore magnam quia.
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
    </main>
  )
}

export default App
