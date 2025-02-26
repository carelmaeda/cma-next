

export default function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; {new Date().getFullYear()} Icaro Maeda. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}