// Defining interfaces for MajorCredits and MinorCredits
interface MajorCredits {
    credits: number;
    brand: 'major'; // Unique identifier to distinguish MajorCredits
  }
  
  interface MinorCredits {
    credits: number;
    brand: 'minor'; // Unique identifier to distinguish MinorCredits
  }
  
  //Creating functions to sum MajorCredits and MinorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'major'
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'minor'
    };
  }
  
  // Implementing the usage
  const majorSubject1: MajorCredits = { credits: 30, brand: 'major' };
  const majorSubject2: MajorCredits = { credits: 20, brand: 'major' };
  const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
  console.log('Total Major Credits:', totalMajorCredits);
  
  const minorSubject1: MinorCredits = { credits: 15, brand: 'minor' };
  const minorSubject2: MinorCredits = { credits: 10, brand: 'minor' };
  const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
  console.log('Total Minor Credits:', totalMinorCredits);
  