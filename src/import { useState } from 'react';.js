import { useState } from 'react';

function Dashboard() {
  // Initial state with a few widgets
  const [widgets, setWidgets] = useState([
    { id: 1, name: 'Sales Chart', content: 'Bar chart showing sales data' },
    { id: 2, name: 'Top Products', content: 'List of top-selling products' }
  ]);

  // State to hold new widget details
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetContent, setNewWidgetContent] = useState('');

  // Function to add a new widget
  const addWidget = () => {
    const newWidget = {
      id: widgets.length + 1,
      name: newWidgetName,
      content: newWidgetContent
    };
    setWidgets([...widgets, newWidget]);
    setNewWidgetName(''); // Clear input fields after adding
    setNewWidgetContent('');
  };

  return (
    <div>
      <h1>Dynamic Dashboard</h1>

      {/* Form to input new widget details */}
      <div>
        <input
          type="text"
          placeholder="Widget Name"
          value={newWidgetName}
          onChange={(e) => setNewWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Content"
          value={newWidgetContent}
          onChange={(e) => setNewWidgetContent(e.target.value)}
        />
        <button onClick={addWidget}>Add Widget</button>
      </div>

      {/* Render existing widgets */}
      <div>
        {widgets.map((widget) => (
          <div key={widget.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{widget.name}</h3>
            <p>{widget.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
