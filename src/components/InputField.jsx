
export default function InputField({ name, size = "sm:col-span-3" }) {
    return (
        <div class={`col-span-6 ${size}`}>
            <label
                for="FirstName"
                class="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
                {name}
            </label>

            <input
                type="text"
                id="FirstName"
                name="first_name"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm py-3 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />
        </div>
    )
}
