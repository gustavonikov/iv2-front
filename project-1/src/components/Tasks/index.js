import React, { Component } from 'react';
import './index.css';

class Tasks extends Component {
    constructor(props) {
        super();

        this.state = {
            itemsAmount: 1,
            newItemName: '',
            items: [
              {
                id: 1,
                taskName: 'Acordar',
                status: 'Incompleta',
              }
            ]
        }
    }

    updateStatus(elementId) {
        const currentItems = this.state.items;
        
        currentItems.forEach((item) => {
            if(item.id === elementId) {
              item.status === 'Completa' ? item.status = 'Incompleta' : item.status = 'Completa';
            
              this.setState({
                items: currentItems,
              })
            }
        })
    }
      
    


    renderItems() {
        const currentStates = this.state.items;

        return currentStates.map((index) => (
            <tr key={index.id}>
                <td>{index.id}</td>
                <td>{index.taskName}</td>
                <td className={index.status === 'Incompleta' ? 'red-color' : 'green-color'}>{index.status}</td>
                <td><button onClick={() => this.updateStatus(index.id)}>Finalizar</button></td>
            </tr>
        ));
    }

    changeName(event) {
        this.setState ({
            newItemName: event.target.value
        })
      
    }

    addNewItem() {
        if(this.state.newItemName === '') {
            return 0;
        }

        const currentItems = this.state.items;
        const lastRecordIndex = parseInt(currentItems.length) - 1;
        const lastItemCodePlusOne = parseInt(currentItems[lastRecordIndex].id) + 1
    
        const newItem = {
            id: lastItemCodePlusOne,
            taskName: this.state.newItemName,
            status: 'Incompleta',
        }

        currentItems.push(newItem);

        this.setState({
            itemsAmount: this.state.itemsAmount + 1,
            newItemName: '',
            items: currentItems,
        })
    }

    render () {
        return (
          <div className="tasks">
              <div className="tasks-container">
                  <input 
                    value={this.state.newItemName} 
                    type="text" 
                    onChange={(event) => this.changeName(event)} 
                  />
                  <button onClick={(event) => {this.addNewItem(event)}}>Inserir</button>
              </div>

              <table id="tasks-table">
                  <thead>
                      <tr>
                          <th>Código</th>
                          <th>Nome</th>
                          <th>Status</th>
                          <th></th>
                      </tr>
                  </thead>
                  <tbody>
                      {this.renderItems()}
                  </tbody>
              </table>
          </div>
      );
    }
    
}

export default Tasks;
