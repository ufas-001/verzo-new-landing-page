const ProblemChallengeSection = () => {
  return (
    <div className="max-w-3xl mx-auto px-4  py-12 md:py-20">
      <h1 className="text-2xl max-w-3xl text-center mx-auto sm:text-2xl md:text-2xl lg:text-4xl font-medium tracking-tight text-primary-black leading-tight md:leading-[100px]">
        Problem/Challenge
      </h1>
      <div className="flex space-x-4 pt-12">
        <div className="w-1/3 border-r border-primary-brandBlue pr-5">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3327 22.6641V4.0474C25.3327 3.2974 25.916 2.66406 26.666 2.66406C36.9743 2.66406 45.3327 11.0224 45.3327 21.3307C45.3327 22.0807 44.6993 22.6641 43.9493 22.6641H25.3327ZM2.66602 25.3307C2.66602 15.2224 10.1743 6.85573 19.916 5.5224C20.6827 5.41406 21.3327 6.03073 21.3327 6.80573V26.6641L34.3743 39.7057C34.9327 40.2641 34.891 41.1807 34.2493 41.6307C30.9827 43.9641 26.9827 45.3307 22.666 45.3307C11.6243 45.3307 2.66602 36.3807 2.66602 25.3307ZM46.5327 26.6641C47.3077 26.6641 47.916 27.3141 47.816 28.0807C47.1743 32.7391 44.9327 36.8807 41.6577 39.9391C41.1577 40.4057 40.3743 40.3724 39.891 39.8807L26.666 26.6641H46.5327Z"
              fill="#027DFF"
            />
          </svg>
          <p className="text-[28px] font-[200] pt-8">
            Couldn’t track which customers had paid or still owed money
          </p>
        </div>
        <div className="w-1/3 border-r border-primary-brandBlue pr-5">
          <svg
            width="48"
            height="42"
            viewBox="0 0 48 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 3C6 1.34062 4.65938 0 3 0C1.34062 0 0 1.34062 0 3V34.5C0 38.6437 3.35625 42 7.5 42H45C46.6594 42 48 40.6594 48 39C48 37.3406 46.6594 36 45 36H7.5C6.675 36 6 35.325 6 34.5V3ZM44.1188 11.1188C45.2906 9.94688 45.2906 8.04375 44.1188 6.87188C42.9469 5.7 41.0437 5.7 39.8719 6.87188L30 16.7531L24.6188 11.3719C23.4469 10.2 21.5438 10.2 20.3719 11.3719L9.87188 21.8719C8.7 23.0437 8.7 24.9469 9.87188 26.1188C11.0438 27.2906 12.9469 27.2906 14.1188 26.1188L22.5 17.7469L27.8812 23.1281C29.0531 24.3 30.9563 24.3 32.1281 23.1281L44.1281 11.1281L44.1188 11.1188Z"
              fill="#027DFF"
            />
          </svg>
          <p className="text-[28px] font-[200] pt-8">
            Mixed personal spending with business expenses
          </p>
        </div>
        <div className="w-1/3">
          <svg
            width="46"
            height="44"
            viewBox="0 0 46 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.3327 20.6641V2.0474C23.3327 1.2974 23.916 0.664062 24.666 0.664062C34.9743 0.664062 43.3327 9.0224 43.3327 19.3307C43.3327 20.0807 42.6993 20.6641 41.9493 20.6641H23.3327ZM0.666016 23.3307C0.666016 13.2224 8.17435 4.85573 17.916 3.5224C18.6827 3.41406 19.3327 4.03073 19.3327 4.80573V24.6641L32.3743 37.7057C32.9327 38.2641 32.891 39.1807 32.2493 39.6307C28.9827 41.9641 24.9827 43.3307 20.666 43.3307C9.62435 43.3307 0.666016 34.3807 0.666016 23.3307ZM44.5327 24.6641C45.3077 24.6641 45.916 25.3141 45.816 26.0807C45.1743 30.7391 42.9327 34.8807 39.6577 37.9391C39.1577 38.4057 38.3743 38.3724 37.891 37.8807L24.666 24.6641H44.5327Z"
              fill="#027DFF"
            />
          </svg>
          <p className="text-[28px] font-[200] pt-8">
            Online payments reduced her cash flow visibility
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemChallengeSection;
