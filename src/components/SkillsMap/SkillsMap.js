import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css'; // Estilos padrão da biblioteca
import './SkillsMap.css'; // Nossos estilos personalizados

// 1. Definimos os nós (as caixinhas de habilidades) com a nova distribuição
const initialNodes = [
  // Ponto Central
  { id: 'center', position: { x: 600, y: 400 }, data: { label: 'Minhas Competências' }, type: 'input', className: 'node-center' },

  // Categorias Principais
  { id: 'backend', position: { x: 600, y: 150 }, data: { label: 'Back-End' }, className: 'node-category' },
  { id: 'frontend', position: { x: 1000, y: 400 }, data: { label: 'Front-End' }, className: 'node-category' },
  { id: 'databases', position: { x: 600, y: 650 }, data: { label: 'Bancos de Dados' }, className: 'node-category' },
  { id: 'devops', position: { x: 200, y: 400 }, data: { label: 'DevOps & Ferramentas' }, className: 'node-category' },
  { id: 'mobile', position: { x: 1000, y: 150 }, data: { label: 'Mobile' }, className: 'node-category' },

  // Habilidades Específicas
  // Back-End
  { id: 'nodejs', position: { x: 450, y: 0 }, data: { label: 'Node.js' }, className: 'node-skill' },
  { id: 'api', position: { x: 600, y: 0 }, data: { label: 'API Rest' }, className: 'node-skill' },
  { id: 'microservicos', position: { x: 750, y: 0 }, data: { label: 'Microsserviços' }, className: 'node-skill' },
  
  // Front-End
  { id: 'react', position: { x: 1200, y: 350 }, data: { label: 'React' }, className: 'node-skill' },
  { id: 'typescript', position: { x: 1200, y: 450 }, data: { label: 'TypeScript' }, className: 'node-skill' },

  // Bancos de Dados
  { id: 'mongodb', position: { x: 450, y: 750 }, data: { label: 'MongoDB' }, className: 'node-skill' },
  { id: 'postgres', position: { x: 750, y: 750 }, data: { label: 'PostgreSQL' }, className: 'node-skill' },

  // DevOps & Ferramentas - POSIÇÕES REORGANIZADAS
  { id: 'docker', position: { x: 0, y: 200 }, data: { label: 'Docker' }, className: 'node-skill' },
  { id: 'git', position: { x: 0, y: 325 }, data: { label: 'Git' }, className: 'node-skill' },
  { id: 'bitbucket', position: { x: -150, y: 325 }, data: { label: 'Bitbucket' }, className: 'node-skill' },
  { id: 'postman', position: { x: 0, y: 450 }, data: { label: 'Postman' }, className: 'node-skill' },
  { id: 'aws', position: { x: 200, y: 550 }, data: { label: 'AWS' }, className: 'node-skill' },
  { id: 'sls', position: { x: 50, y: 600 }, data: { label: 'SLS Framework' }, className: 'node-skill' },
  { id: 'lambda', position: { x: 200, y: 650 }, data: { label: 'AWS Lambda' }, className: 'node-skill' },
  { id: 'cloudwatch', position: { x: 350, y: 600 }, data: { label: 'CloudWatch' }, className: 'node-skill' },

  // Mobile
  { id: 'flutter', position: { x: 1200, y: 150 }, data: { label: 'Flutter' }, className: 'node-skill' },
];

// As conexões (arestas) continuam as mesmas
const initialEdges = [
  { id: 'e-center-backend', source: 'center', target: 'backend', animated: true },
  { id: 'e-center-frontend', source: 'center', target: 'frontend', animated: true },
  { id: 'e-center-databases', source: 'center', target: 'databases', animated: true },
  { id: 'e-center-devops', source: 'center', target: 'devops', animated: true },
  { id: 'e-center-mobile', source: 'center', target: 'mobile', animated: true },
  { id: 'e-backend-nodejs', source: 'backend', target: 'nodejs' },
  { id: 'e-backend-api', source: 'backend', target: 'api' },
  { id: 'e-backend-microservicos', source: 'backend', target: 'microservicos' },
  { id: 'e-frontend-react', source: 'frontend', target: 'react' },
  { id: 'e-frontend-typescript', source: 'frontend', target: 'typescript' },
  { id: 'e-databases-mongodb', source: 'databases', target: 'mongodb' },
  { id: 'e-databases-postgres', source: 'databases', target: 'postgres' },
  { id: 'e-devops-docker', source: 'devops', target: 'docker' },
  { id: 'e-devops-git', source: 'devops', target: 'git' },
  { id: 'e-git-bitbucket', source: 'git', target: 'bitbucket' },
  { id: 'e-devops-postman', source: 'devops', target: 'postman' },
  { id: 'e-devops-aws', source: 'devops', target: 'aws' },
  { id: 'e-aws-sls', source: 'aws', target: 'sls' },
  { id: 'e-aws-lambda', source: 'aws', target: 'lambda' },
  { id: 'e-aws-cloudwatch', source: 'aws', target: 'cloudwatch' },
  { id: 'e-mobile-flutter', source: 'mobile', target: 'flutter' },
];

const SkillsMap = () => {
  return (
    <section className="skills-map-section" id="skills-map">
        <h2>Mapa de Competências</h2>
        <div className="skills-map-container">
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                fitView
                nodesDraggable={false}
                zoomOnScroll={false}
            >
                <Background color="#4a4a4a" gap={16} />
                <Controls showInteractive={false} />
            </ReactFlow>
        </div>
    </section>
  );
};

export default SkillsMap;