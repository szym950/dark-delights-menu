<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep menu content in a browser-safe data module with imported asset pointers so new dishes can be added without changing the page layout.
- Use the home route for the menu with in-memory category/search and cart state; accessible dialogs hold dish details and cart quantities, and checkout must not be presented until real pricing and an order flow are supplied.
- Define all menu visual styles and semantic tokens in the global stylesheet to keep the catalogue and future dishes visually consistent.
