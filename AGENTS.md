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
- Use the home route for the menu and local category/search state for filtering; item details open in an accessible dialog because this is a menu catalogue, not an ordering flow.
- Define all menu visual styles and semantic tokens in the global stylesheet to keep the catalogue and future dishes visually consistent.
