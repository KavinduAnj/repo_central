import { useState } from 'react'
import './App.css'
import { SimpleCard } from './components/cards'

function App() {
  const projectData = [
    { title: "React Framework", description: "A popular framework for building user interfaces.", buttonText: "Explore" },
    { title: "Tailwind CSS", description: "Utility-first CSS framework for rapid UI development.", buttonText: "Docs" },
    { title: "Vite", description: "Next generation frontend tooling. It's fast!", buttonText: "Try Now" },
    { title: " daisyUI", description: "The most popular component library for Tailwind CSS.", buttonText: "Components" },
    { title: "Node.js", description: "JavaScript runtime built on Chrome's V8 engine.", buttonText: "Download" },
    { title: "Vite", description: "Next generation frontend tooling. It's fast!", buttonText: "Try Now" },
  ]
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectData.filter((project) => project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.description.toLowerCase().includes(searchTerm.toLowerCase()));

  return (

    <div className='min-h-screen bg-linear-to-r from-gray-100 via-gray-50 to-cyan-100 animate-gradient-x'>
      <nav className='flex items-center p-4 shadow-sm shadow-gray-200'>
        <div className="flex-2 items-center gap-2">
          <span className="text-xl font-bold tracking-tight">GitLearn</span>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
            <div className="w-3 h-3 bg-black rounded-full"></div>
            Dark
          </button>
        </div>

      </nav>

      <div className='flex flex-col mt-30 gap-4'>
        <div className='text-8xl justify-center text-center font-bold font-serif'>Explore open-source</div>
        <div className='text-7xl text-center font-semibold font-serif'>Master the craft</div>
        <p className='text-xl text-center  '>Curated github repositories</p>
        <div className='flex justify-center p-5'>
          <input type="text" placeholder='Search' className='w-1/2 p-3 border border-gray-300 rounded-full ' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

      </div>
      <div className='flex justify-center items-center m-20 flex-wrap gap-8 pb-20'>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <SimpleCard
              key={index}
              title={project.title}
              description={project.description}
              buttonText={project.buttonText}
            />
          ))
        ) : (
          <p className="text-gray-500 italic">No projects match your search.</p>
        )}
      </div>
      <footer className="w-full py-6 mt-10 text-center text-gray-500 border-t border-gray-300/60">
        <p>© {new Date().getFullYear()} GitLearn. All rights reserved.</p>
      </footer>
    </div>

  )
}

export default App
