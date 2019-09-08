import React from 'react';

const CoundownInput = () => {
  return (
    <div>
      <form>
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