import "./TravelForm.css";
function TravelForm({ onAdd, editingTravel, onUpdate, onCancelEdit }) {
  return (
    <form className="travel-form" onSubmit={handleSubmit}>
      <h2>{editingTravel ? "여행지 수정" : "새 여행지 추가"}</h2>

      <div className="form-row">
        <div className="form-group">
          <label>여행지 이름 *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="예: 에펠탑"
          />
        </div>

        <div className="form-group">
          <label>국가 *</label>
          <input
            type="text"
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="예: 프랑스"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>도시 *</label>
            <input
              type="text"
              name="name"
              value={form.city}
              onChange={handleChange}
              placeholder="예: 파리"
            />
          </div>

          <div className="form-group">
            <label>방문 날짜 *</label>
            <input
              type="date"
              name="date"
              value={form.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>

        <div className="form-group">
          <label>평점: {form.rating}점</label>
          <input
            type="range"
            name="rating"
            min={1}
            max={5}
            value={form.rating}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>메모</label>
          <textarea
            name="memo"
            value={form.memo}
            onChange={handleChange}
            rows={4}
            placeholder="여행지에 대한 메모를 작성하세요..."
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="btn-primary">
            {editingTravel ? "수정하기" : "추가하기"}
          </button>
          {editingTravel && (
            <button
              type="button"
              className="btn-secondary"
              onClick={handleCancel}
            >
              취소
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default TravelForm;
