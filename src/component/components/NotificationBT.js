import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
 
class NotificationBT extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
        // no default
      }
    };
  };
 
  render() {
    return (
      <div className="container-notifications">
        <div>
          <button className='btn btn-info'
            onClick={this.createNotification('info')}>Info
          </button>
        </div>
        <hr/>
        <div>
          <button className='btn btn-success'
            onClick={this.createNotification('success')}>Success
          </button>
        </div>
        <hr/>
        <div>
          <button className='btn btn-warning'
            onClick={this.createNotification('warning')}>Warning
          </button>
        </div>
        <hr/>
        <div>
          <button className='btn btn-danger'
            onClick={this.createNotification('error')}>Error
          </button>
        </div>
        <NotificationContainer/>
      </div>
      
    );
  }
}
 
export default NotificationBT;