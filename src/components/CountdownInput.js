import React from 'react';

const CoundownInput = () => {
  return (
    <div>
      <h2>Add a new event and date to countdown to:</h2>
      <form>
        <label>
          Event Title:
          <input type="text" name="event" />
        </label>
        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default CoundownInput;