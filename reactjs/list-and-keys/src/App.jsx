import React from "react";

const listCustomer = [
    {
        id: 1,
        name: 'Renan Makiya',
        skills: ['React', 'Node', 'CSS', 'Webpack']
    },
    {
        id: 2,
        name: 'Fabio da Silva',
        skills: ['HTML', 'Java', 'Go', 'JS']
    },
    {
        id: 3,
        name: 'Silvia Makiya',
        skills: ['Assembly']
    },
    {
        id: 4,
        name: 'Nilson Makiya',
        skills: ['Reason']
    }
]

const App = () => {

    const renderCustomers = (customer) => {
        return(
            <div key={`customer-${customer.id}`}>
                <li>{customer.name}</li>
                {customer.skills.map(renderSkills)}
            </div>
        )
    }

    const renderSkills = (skill, index) => {
        return(
            <div style={{paddingLeft:'30px'}} key={`skill-${index}`}>
                <li>{skill}</li>
            </div>
        )
    }

    return(
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo a nossa aula =D</p>
            <div>
                <ul>
                    {listCustomer.map(renderCustomers)}
                </ul>
            </div>
        </div>
    );
};
export default App;