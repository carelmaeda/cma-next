

export default function Footer() {
  return (
    <footer className="footer py-3 mt-5">
      <div className="container">
        <div className="d-md-flex justify-content-between">
            <p className="col-auto">This site was designed and build by me.</p>
            <p className="col-auto">&copy; {new Date().getFullYear()} Carel Maeda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}