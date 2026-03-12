type CloverKLogoProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
};

export default function CloverKLogo({
  size = 320,
  color = "#efb6c1",
  strokeWidth = 12,
  className = "",
}: CloverKLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer clover border */}
      <path
        d="
          M512 120
          C610 120 690 190 720 290
          C825 305 904 385 904 488
          C904 590 825 670 720 686
          C694 795 615 876 512 876
          C409 876 330 795 304 686
          C199 670 120 590 120 488
          C120 385 199 305 304 290
          C334 190 414 120 512 120
          Z
        "
        stroke={color}
        strokeWidth={strokeWidth * 2.2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Inner clover border */}
      <path
        d="
          M512 170
          C598 170 668 232 692 320
          C783 332 850 401 850 488
          C850 575 783 644 692 656
          C670 745 600 812 512 812
          C424 812 354 745 332 656
          C241 644 174 575 174 488
          C174 401 241 332 332 320
          C356 232 426 170 512 170
          Z
        "
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/*
        Centered cursive-ish K
        <path
          d="
            M395 575
            C430 610 500 595 530 520
            L585 390

            M585 390
            C605 345 625 320 650 310

            M585 390
            C640 385 690 385 735 390

            M585 390
            C650 380 710 330 780 325

            M585 390
            C650 405 670 470 690 535
            C705 585 735 605 780 575

            M395 575
            C355 555 340 535 330 520

            M455 430
            C395 445 350 420 340 390
            C325 345 355 320 405 316
            C455 313 515 320 560 325
          "
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      */}
    </svg>
  );
}
