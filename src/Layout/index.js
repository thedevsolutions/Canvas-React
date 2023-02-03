import React from 'react';

function Layout(props) {
    return (
        <div>
            <div className="flex h-screen w-screen bg-gray-200">

  <aside className="flex h-full w-small_sidebar flex-col items-center overflow-y-auto bg-sidebar px-0 shadow transition-all sm:w-sidebar sm:px-3">

    <div className="flex w-full items-center justify-center py-9 opacity-0 sm:opacity-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="171.585" height="29.333" viewBox="0 0 171.585 29.333">
        <g id="Group_6" data-name="Group 6" transform="translate(-40.333 -61.333)">
          <path id="Path_51" data-name="Path 51" d="M86.8,74.38V76.8h2.86a2.589,2.589,0,0,1-2.5,1.32,3.121,3.121,0,1,1,2.6-4.74H94.7c-.5-3.38-3.64-5.78-7.54-5.78-4.52,0-7.7,3.06-7.7,7.4s3.18,7.4,7.7,7.4c4.58,0,7.64-3.22,7.64-8.02Zm18.051-3.18-.42.74a5.027,5.027,0,0,0-3.18-1.1,5.782,5.782,0,0,0,0,11.56,5.1,5.1,0,0,0,3.16-1.06l.36.66h3.44V71.2Zm-4.76,5.42a1.982,1.982,0,1,1,1.98,2.06A1.95,1.95,0,0,1,100.091,76.62Zm23.2-5.82a4.508,4.508,0,0,0-3.38,1.52,3.781,3.781,0,0,0-3.08-1.52,4.3,4.3,0,0,0-3.14,1.36l-.42-.96H110.1V82h4.48V75.94c0-.94.38-1.5,1.02-1.5.56,0,.88.44.88,1.2V82h4.36V75.94c0-.98.34-1.5,1.04-1.5.56,0,.86.36.86,1.2V82h4.48V75.18C127.216,72.66,125.736,70.8,123.3,70.8Zm17.587,5.64c0-3.26-2.56-5.64-6.26-5.64-3.62,0-6.2,2.4-6.2,5.78s2.6,5.82,6.2,5.82a5.879,5.879,0,0,0,6-4.12H136.4a1.96,1.96,0,0,1-1.78.84,1.833,1.833,0,0,1-1.94-1.58h8.1A7.027,7.027,0,0,0,140.883,76.44Zm-6.26-2.38a1.809,1.809,0,0,1,1.92,1.42h-3.82A1.82,1.82,0,0,1,134.623,74.06Zm12.063,8.34c3.02,0,5.04-1.5,5.04-3.78,0-2.9-2.28-3.22-3.94-3.5-.98-.16-1.76-.28-1.76-.86a.586.586,0,0,1,.64-.6.705.705,0,0,1,.7.78h4.14c-.1-2.2-1.94-3.64-4.84-3.64-2.94,0-4.9,1.34-4.9,3.62,0,2.7,2.22,3.24,3.86,3.5.98.16,1.74.28,1.74.88a.629.629,0,0,1-.68.64.789.789,0,0,1-.76-.9h-4.26C141.746,80.88,143.466,82.4,146.686,82.4Zm24.839-.4-2.04-14h-4.6l-2.9,6.74L159.145,68h-4.6l-2.06,14h4.68l.78-7.04,3.26,7.04h1.6l3.24-7.06.84,7.06Zm6.929.4c3.74,0,6.32-2.36,6.32-5.8s-2.58-5.8-6.32-5.8-6.32,2.36-6.32,5.8S174.714,82.4,178.454,82.4Zm0-3.86a1.941,1.941,0,1,1,1.88-1.94A1.844,1.844,0,0,1,178.454,78.54Zm15.3-11.24v4.22a4.958,4.958,0,0,0-2.58-.72,5.8,5.8,0,0,0,0,11.6,4.882,4.882,0,0,0,3.26-1.2l.36.8h3.34V67.3Zm-1.76,11.38a2.083,2.083,0,1,1,1.98-2.08A1.984,1.984,0,0,1,191.992,78.68Zm19.926-2.24c0-3.26-2.56-5.64-6.26-5.64-3.62,0-6.2,2.4-6.2,5.78s2.6,5.82,6.2,5.82a5.879,5.879,0,0,0,6-4.12h-4.22a1.96,1.96,0,0,1-1.78.84,1.833,1.833,0,0,1-1.94-1.58h8.1A7.026,7.026,0,0,0,211.918,76.44Zm-6.26-2.38a1.809,1.809,0,0,1,1.92,1.42h-3.82A1.82,1.82,0,0,1,205.658,74.06Z" fill="#fff" />
          <path id="Path_52" data-name="Path 52" d="M45.667,70.667A5.333,5.333,0,1,1,41.9,72.229,5.333,5.333,0,0,1,45.667,70.667ZM55,61.333A5.333,5.333,0,1,1,51.229,62.9,5.333,5.333,0,0,1,55,61.333ZM55,80a5.333,5.333,0,1,1-3.771,1.562A5.333,5.333,0,0,1,55,80Zm9.333-9.333a5.333,5.333,0,1,1-3.771,1.562A5.333,5.333,0,0,1,64.333,70.667Z" fill="#fff" />
        </g>
      </svg>
    </div>

    <ul className="flex h-full w-full flex-col">

      <li className="mb-2 bg-sidebarHover hover:bg-sidebarHover sm:rounded-xl">
        <a href="#" className="flex h-12 w-full items-center justify-center px-0 text-sm font-normal text-orange-500 focus:text-orange-500 sm:justify-start sm:px-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-0 h-5 w-5 sm:mr-3">
            <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
            <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
            <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
          </svg>

          <span className="hidden font-semibold sm:block">Dashboard</span>
        </a>
      </li>
      <li className="active mb-2  sm:rounded-xl">
        <a href="#" className="flex h-12 w-full items-center justify-center px-0 text-sm font-normal tracking-wide text-gray-400 hover:bg-sidebarHover focus:text-orange-500 sm:justify-start sm:px-6  sm:rounded-xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-0 h-5 w-5 sm:mr-3">
            <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
          </svg>

          <span className="hidden sm:block">Store</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-auto h-5 w-5 hidden sm:block">
            <path fill-rule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clip-rule="evenodd" />
          </svg>
        </a>
        <ul className="pl-10 hidden sm:block">
          <li className="border-l border-l-gray-600 pl-1"><a href="#" className="flex h-10 w-full items-center justify-center px-0 text-sm font-normal tracking-wide text-gray-400 focus:text-orange-500 sm:justify-start sm:px-6 hover:bg-sidebarHover rounded ">New Sales</a></li>
          <li  
           className="border-l border-l-gray-600 pl-1"
          ><a href="#" className="flex h-10 w-full items-center justify-center px-0 text-sm font-normal tracking-wide text-gray-400 focus:text-orange-500 sm:justify-start sm:px-6 hover:bg-sidebarHover rounded ">Trending</a></li>
        </ul>
      </li>
      <li className="mb-2 hover:bg-sidebarHover sm:rounded-xl">
        <a href="#" className="flex h-12 w-full items-center justify-center px-0 text-sm font-normal text-gray-400 focus:text-orange-500 sm:justify-start sm:px-6 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-0 h-5 w-5 sm:mr-3">
            <path d="M15 3.75H9v16.5h6V3.75zM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5zM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 01-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875z" />
          </svg>

          <span className="hidden sm:block">Library</span>
        </a>
      </li>
      <li className="mb-2 hover:bg-sidebarHover sm:rounded-xl">
        <a href="#" className="flex h-12 w-full items-center justify-center px-0 text-sm font-normal text-gray-400 focus:text-orange-500 sm:justify-start sm:px-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-0 h-5 w-5 sm:mr-3">
            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
          </svg>

          <span className="hidden sm:block">Friends</span>
        </a>
      </li>
      <li className="mb-2 hover:bg-sidebarHover sm:rounded-xl">
        <a href="#" className="flex h-12 w-full items-center justify-center px-0 text-sm font-normal text-gray-400 focus:text-orange-500 sm:justify-start sm:px-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-0 h-5 w-5 sm:mr-3">
            <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
          </svg>

          <span className="hidden sm:block">Live</span>
        </a>
      </li>
      <li className="mt-auto mb-2 hover:bg-sidebarHover sm:rounded-xl">
        <a href="#" className="flex h-12 w-full items-center justify-center px-0 text-sm font-normal text-gray-400 focus:text-orange-500 sm:justify-start sm:px-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-0 h-5 w-5 sm:mr-3">
            <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
          </svg>

          <span className="hidden sm:block">Saved</span>
        </a>
      </li>
      <li className="mb-2 hover:bg-sidebarHover sm:rounded-xl">
        <a href="#" className="flex h-12 w-full items-center justify-center px-0 text-sm font-normal text-gray-400 focus:text-orange-500 sm:justify-start sm:px-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mr-0 h-5 w-5 sm:mr-3">
            <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
          </svg>

          <span className="hidden sm:block">settings</span>
        </a>
      </li>
    </ul>
  </aside>
  <div className="app min-h-screen flex-1 overflow-y-auto bg-gray-400 p-6">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ut laborum deserunt cumque. Perspiciatis quia nemo asperiores. Cumque, accusamus. Cupiditate tempore nostrum doloremque ea. Eum aperiam perferendis dicta nisi voluptates dolores consectetur vitae commodi nam. Cupiditate, deserunt inventore vitae minima vero, sint illum quaerat rem, commodi voluptate adipisci? Veritatis rerum ad minus placeat fuga fugit nemo quia voluptatibus cupiditate repellat illo eveniet tempore magnam, pariatur perspiciatis maxime distinctio totam quo debitis voluptatum eum ipsum assumenda repudiandae autem. Modi ducimus asperiores, obcaecati harum odio ipsam quos deserunt, mollitia veritatis quasi earum? Nisi ratione, cumque quam deleniti commodi culpa necessitatibus beatae rem sunt, veniam optio quos perferendis, tenetur aliquid minima asperiores iste repudiandae! Consequatur, ipsa adipisci. Cupiditate alias dolor quam temporibus dolore tempore assumenda impedit incidunt illo. Omnis, nihil provident? Eligendi cupiditate, ad voluptates assumenda ducimus dolor omnis dicta, totam doloremque voluptatibus natus optio id cum, perspiciatis molestiae incidunt quibusdam fugiat laboriosam? Unde corrupti adipisci reiciendis dolorum suscipit quis voluptatum earum totam nulla explicabo molestias itaque dolorem porro recusandae, laudantium excepturi animi voluptates! Eos quasi fugiat sequi eaque alias veniam corrupti a rerum autem vero repudiandae iure iste explicabo, error fugit deleniti quaerat quod architecto quos perferendis natus, veritatis perspiciatis rem? Harum veritatis libero dignissimos quae, enim sapiente incidunt vel doloribus fugiat accusantium cumque quo voluptatem adipisci error corrupti rem neque labore veniam repudiandae consectetur deleniti. Quae, dolorum quasi. Esse iusto doloremque consectetur ipsa saepe neque explicabo nihil totam omnis voluptatum, distinctio deserunt aliquid nam voluptatem repudiandae suscipit debitis minus, exercitationem culpa aspernatur nobis cum deleniti possimus obcaecati. Officiis vel officia error debitis minus, veritatis id deleniti praesentium nesciunt, similique consequatur nostrum voluptates in eius voluptatum ipsum veniam animi perspiciatis cum consequuntur laudantium atque! Atque corrupti est, voluptatibus quibusdam reprehenderit dolorum esse ipsa vel veritatis qui mollitia velit tenetur aspernatur dolorem quia saepe accusamus recusandae delectus! Unde mollitia error dolorem autem minima facere commodi harum saepe itaque rerum exercitationem, placeat vitae ad doloribus consectetur a? Eaque, tempora minus neque consequuntur iure commodi ut animi accusamus reiciendis adipisci delectus ad dolor totam sed molestiae repudiandae, maiores expedita? Impedit tempore veritatis quos minima neque cum at, exercitationem saepe, est numquam molestias perferendis rem. Ipsa, aspernatur. Quo maxime, earum ducimus omnis excepturi cupiditate magnam cum, facere iusto et, veritatis minima! Necessitatibus unde, et officiis, culpa qui architecto eligendi amet suscipit fuga aperiam quae. Perspiciatis dolorem voluptatum culpa? Atque praesentium quam commodi labore? Quae omnis repellendus exercitationem, tenetur voluptates necessitatibus tempore hic illum, velit corrupti officiis temporibus beatae possimus praesentium, consectetur architecto laudantium blanditiis saepe illo commodi iusto laboriosam amet cumque ut. Atque repellendus deserunt fuga unde pariatur provident rem sapiente illum vitae velit nesciunt recusandae, odit commodi! Distinctio sunt non alias facere debitis voluptatibus neque error vitae sed suscipit ipsum, voluptates exercitationem qui, corporis ducimus dignissimos esse libero minus modi. Perferendis odio nulla recusandae harum numquam ab rem, mollitia quae quo possimus a excepturi necessitatibus libero consectetur veniam deserunt corporis dignissimos, ea nam! Ratione aut obcaecati beatae hic consequuntur adipisci illo maiores dolorum sunt. Eveniet ratione doloremque maiores mollitia vel blanditiis temporibus sed adipisci labore veritatis quaerat tenetur consectetur earum illum, minus pariatur placeat accusamus nostrum odit voluptatibus, dolorum neque. Nobis quibusdam excepturi quod pariatur consequatur eveniet ex, aliquam totam quis rem facere, temporibus deserunt accusamus saepe ipsam modi ullam at possimus explicabo obcaecati maxime mollitia earum! Fuga, repellendus cumque.</p>
  </div>
</div>

        </div>
    );
}

export default Layout;