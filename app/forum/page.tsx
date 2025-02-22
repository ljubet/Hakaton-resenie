"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/ui/Navbar"

const initialPosts = [
    { id: 1, title: "How to secure funding for your startup", author: "John Doe", comments: 15 },
    { id: 2, title: "Best practices for remote team management", author: "Jane Smith", comments: 12 },
    { id: 3, title: "The importance of user experience in product design", author: "Bob Johnson", comments: 10 },
    { id: 4, title: "Scaling your startup: Challenges and solutions", author: "Emma Davis", comments: 8 },
    { id: 5, title: "The role of AI in modern startups", author: "Michael Lee", comments: 20 },
]

export default function Forum() {
    const [posts, setPosts] = useState(initialPosts)
    const [newPost, setNewPost] = useState({ title: "", content: "" })

    const handleSubmit = (e) => {
        e.preventDefault()
        const newId = posts.length + 1
        setPosts([...posts, { id: newId, ...newPost, author: "Current User", comments: 0 }])
        setNewPost({ title: "", content: "" })
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-brand-teal mb-8">Startup Forum</h1>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-brand-teal mb-4">Create a New Post</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Post Title"
                            value={newPost.title}
                            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                        <textarea
                            placeholder="Post Content"
                            value={newPost.content}
                            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded"
                            rows={4}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-brand-red text-white px-4 py-2 rounded hover:bg-brand-orange transition-colors"
                        >
                            Submit Post
                        </button>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-brand-teal mb-4">Recent Discussions</h2>
                    <div className="space-y-4">
                        {posts.map((post) => (
                            <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                <Link
                                    href={`/forum/post/${post.id}`}
                                    className="text-lg font-semibold text-brand-teal hover:text-brand-orange"
                                >
                                    {post.title}
                                </Link>
                                <p className="text-sm text-gray-600">By {post.author}</p>
                                <p className="text-sm text-gray-500">{post.comments} comments</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}