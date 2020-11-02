import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import Repository from '../Repository';

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>

            <Form action="">
                <input type="text" placeholder="Digite o nome do repositorio" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars2.githubusercontent.com/u/49343939?s=460&u=5884ecf5b61dd97d309479c3edee136c21efd1d1&v=4"
                        alt="Adilson Domiciano Jr"
                    /> 
                    <div>
                        <strong>adilsondjr/github-explorer</strong>
                        <p>Explorador de repositórios</p>
                    </div> 

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars2.githubusercontent.com/u/49343939?s=460&u=5884ecf5b61dd97d309479c3edee136c21efd1d1&v=4"
                        alt="Adilson Domiciano Jr"
                    /> 
                    <div>
                        <strong>adilsondjr/github-explorer</strong>
                        <p>Explorador de repositórios</p>
                    </div> 

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars2.githubusercontent.com/u/49343939?s=460&u=5884ecf5b61dd97d309479c3edee136c21efd1d1&v=4"
                        alt="Adilson Domiciano Jr"
                    /> 
                    <div>
                        <strong>adilsondjr/github-explorer</strong>
                        <p>Explorador de repositórios</p>
                    </div> 

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard
