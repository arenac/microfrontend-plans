import React from 'react';

const plans = [
  {
    name: 'Plan 1',
    description: 'Change oil'
  },
  {
    name: 'Plan 2',
    description: 'Change air filter'
  },
  {
    name: 'Plan 3',
    description: 'Lubrifie'
  },
]

const App = () => (
  <div class="plan-container">
    <table class="plans-table">
      <thead>
        <tr>
          <th>Plan Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
      {plans.map(plan => (
        <tr>
          <td>{plan.name}</td>
          <td>{plan.description}</td>
        </tr>
      ))}
      </tbody>
    </table>
  </div>
);

export default App;