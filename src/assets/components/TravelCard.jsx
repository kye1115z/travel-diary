function TravelCard({travel, onEdit, onDelete}) {
  const stars = '⭐'.repeat(travel.rating);

  return (
      /*카드 이미지*/
      <div className="travel-card">
        <div className="card-image">
          {travel.image ? (
              <img src = {travel.image} alt = {travel.name}/>
          ) : (
              <div className="no-image">📷</div>
          )}
        </div>

        {/*카드 내용들*/}
        <div className="card-content">
          <h3>{travel.name}</h3>
          <p className="location">🎈{travel.city}</p>
          <p className="date">📅{travel.date}</p>
          <p className="rating">{stars}</p>
          {travel.memo && <p className="memo">{travel.memo}</p>}
        </div>

        <div className="card-actions">
          {/*travel 객체로 수정*/}
          <button className="btn-edit" onClick={() => onEdit(travel)}>
            수정
          </button>

          {/* id 로 카드 삭제*/}
          <button className="btn-delete" onClick={() => onDelete(travel.id)}>
            삭제
          </button>
        </div>
      </div>
  );
}

export default TravelCard;
