export const Movies = () => {
  return (
    <form>
      <label htmlFor="movie-name">
        <input
          type="text"
          name="movie-name"
          placeholder="Search film by name"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};
