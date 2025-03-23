export default function Education() {
    return (
      <>
        <h1 className="text-3xl font-bold mb-8">Education</h1>
  
        <div className="space-y-6">
          {/* FIAP - DevOps */}
          <div className="flex items-start space-x-6">
            <div className="w-24 flex-shrink-0">
              <img src="/fiap.png" alt="FIAP Logo" className="w-full h-auto object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">MBA in Devops, Automation & Cloud Strategy</h2>
              <p>FIAP University, Brazil • Apr 2019 - Apr 2020</p>
              <a
                href="https://www.fiap.com.br/mba/mba-em-devops-automation-e-cloud-strategy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View course details
              </a>
            </div>
          </div>
  
          {/* FIAP - Architecture */}
          <div className="flex items-start space-x-6">
            <div className="w-24 flex-shrink-0">
              <img src="/fiap.png" alt="FIAP Logo" className="w-full h-auto object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">MBA in IT Solutions Architecture</h2>
              <p>FIAP University, Brazil • Apr 2015 - Apr 2016</p>
              <a
                href="https://www.fiap.com.br/mba/mba-em-arquitetura-de-solucoes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View course details
              </a>
            </div>
          </div>
  
          {/* Anhanguera */}
          <div className="flex items-start space-x-6">
            <div className="w-24 flex-shrink-0">
              <img src="/anhanguera-logo.png" alt="Anhanguera Logo" className="w-full h-auto object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Bachelor in Computer Engineering</h2>
              <p>Anhanguera University, Brazil • Jan 2009 - Dec 2013</p>
              <a
                href="https://www.anhanguera.com/curso/engenharia-da-computacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View course details
              </a>
            </div>
          </div>
  
          {/* ETEC */}
          <div className="flex items-start space-x-6">
            <div className="w-24 flex-shrink-0">
              <img src="/centro-paula-souza.png" alt="ETEC Logo" className="w-full h-auto object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Associate in IT</h2>
              <p>ETEC, Brazil • Jan 2003 - Dec 2004</p>
              <a
                href="https://www.cps.sp.gov.br/cursos-etec/informatica/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View course details
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }  