export const loadState = () => {
    try {
      // const maxValueCounter = localStorage.getItem('maxValue');
      // const minValueCounter = localStorage.getItem('minValue');
      // if (maxValueCounter) {
      //   return JSON.parse(maxValueCounter);
      // }
      // if (minValueCounter) {
      //   return JSON.parse(minValueCounter);
      // }
      const maxValueCounter = localStorage.getItem('maxValue');
      const minValueCounter = localStorage.getItem('minValue');
      if (maxValueCounter === null || minValueCounter === null) {
        return undefined;
      }
    } catch (err) {
      return undefined;
    }
  }; 

  export const saveState = (state: any) => {
    try {
      const counterMax = JSON.stringify(state.counterMax);
      localStorage.setItem('maxValue', counterMax);
      const counterMin = JSON.stringify(state.counterMin);
      localStorage.setItem('minValue', counterMin);
    } catch {
      // ignore write errors
    }
  };