export default function Loading() {
    return (
      <div className="loading-screen d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="ms-3 mb-0">Loading!!!</p>
      </div>
    );
  }