
const Loading = () => {
  return (
    <>
        <div className="d-flex justify-content-center spinner">
            <div role="status" style={{width: '5rem', height: '5rem'}} className="spinner-border">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </>
  )
}

export default Loading