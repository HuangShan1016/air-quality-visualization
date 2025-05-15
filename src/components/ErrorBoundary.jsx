// 文件：src/components/ErrorBoundary.jsx
import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
    this.setState({ errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '2rem',
          background: '#300',
          color: '#fdd',
          fontFamily: 'monospace'
        }}>
          <h2>组件渲染出错了！</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.errorInfo?.componentStack || '（无堆栈信息）'}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}