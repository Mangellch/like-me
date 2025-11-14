function Post({
  post: { id, titulo, img, descripcion, likes },
  like,
  eliminarPost,
}) {
  return (
    <div className="col-12 col-sm-4 d-flex mb-4">
      <div className="card w-100 d-flex flex-column shadow-sm">

        {/* Imagen uniforme */}
        <img
          className="card-img-top"
          src={img}
          style={{
            height: "200px",
            objectFit: "cover",
            width: "100%",
          }}
        />

        <div className="card-body d-flex flex-column">

          <h4 className="card-title">{titulo}</h4>

          {/* Hace que todas las cards midan igual */}
          <p className="card-text flex-grow-1">{descripcion}</p>

          <div className="d-flex justify-content-between align-items-center mt-auto">
            <div>
              <i
                onClick={() => like(id, likes)}
                className={`fa-heart fa-xl ${
                  likes ? "fa-solid" : "fa-regular"
                }`}
                role="button"
              ></i>
              <span className="ms-1">{likes}</span>
            </div>

            <i
              onClick={() => eliminarPost(id)}
              className="fa-solid fa-x text-danger"
              role="button"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
