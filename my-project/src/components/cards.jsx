export function SimpleCard({
  title = "Card Title",
  description = "A card component has a figure, a body part, and inside body there are title and actions parts",
  imageSrc = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  buttonText = ""
}) {
  return (
    <div className="card border-0 rounded-xl bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={imageSrc}
          className="border-0 rounded-t-xl"
          alt={title} />
      </figure>
      <div className="card-body m-5">
        <h2 className="card-title">
          {title}
        </h2>
        <p>{description}</p>
        <div className="justify-end">
          <button
            type="button"
            className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 -xs font-medium  leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
          >
            {buttonText}
          </button>

        </div>
      </div>
    </div>
  )
}
